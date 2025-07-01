import { User, validation } from "../models/user.js";
import RefreshToken from '../models/refreshToken.js';
import { makeCookie , clearCookie } from "../utils/setCookie.js";


const login = async (req, res) => {
    try {
        const user = await User.findOne({ userName: req.body.userName });
        if (!user) return res.status(401).json({ message: "Incorrect username or password" });

        const isMatch = await user.comparePassword(req.body.password);
        if (!isMatch) return res.status(401).json({ message: "Incorrect username or password" });

        const accessToken = user.generateAccessToken();

        const refresh_Token = RefreshToken.generateRefreshToken();
        const now = new Date();
        const expiresAt = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const userAgent = req.headers['user-agent'];

        const newRefreshToken = await new RefreshToken({
            token: refresh_Token,
            userId: user._id,
            expiresAt: expiresAt,
            ipAddress: ipAddress,
            userAgent: userAgent

        }).save();

        makeCookie(res,accessToken,refresh_Token,newRefreshToken._id.toString());

        return res.status(200).json({ message: "Login successful" });


    } catch (error) {
        console.error("Error from /server/controllers/auth.js at loginUser Controller: " + error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const logout = async (req, res) => {
    try {

        const currentRefreshToken = req.cookies.refreshToken;
        const currentRefreshTokenId = req.cookies.refreshTokenId
        const user = req.user
        
        if(currentRefreshToken && currentRefreshTokenId){
    
            await RefreshToken.findOneAndDelete({_id: currentRefreshTokenId});
        }

        else if((!currentRefreshToken && currentRefreshTokenId)||(currentRefreshToken && !currentRefreshTokenId)){
            
            await RefreshToken.deleteMany({userId: req.user._id});
        }

        clearCookie(res)
        res.status(200).json({ message: "Logout successful" });

    } catch (error) {
        console.error("Error from /server/controllers/auth.js at logoutUser Controller: " + error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const refreshToken = async (req, res) => {
    try {
        const currentRefreshToken_cookie = req.cookies.refreshToken;
        const currentAccessTokenId_cookie = req.cookies.refreshTokenId;

        if (currentRefreshToken_cookie && currentAccessTokenId_cookie) {

            const currentRefreshToken_Database = await RefreshToken.findById(currentAccessTokenId_cookie);

            if (!currentRefreshToken_Database) {
                clearCookie(res)
                return res.status(401).send({ message: "Refresh token not found or invalid" });
            }

            const isMatch = await currentRefreshToken_Database.compareRefreshToken(currentRefreshToken_cookie);
            if (!isMatch) {
                clearCookie(res);
                await RefreshToken.findOneAndDelete({ _id: currentAccessTokenId_cookie });

                return res.status(401).send({ message: "Refresh token not found or invalid" });
            }

            const user = await User.findById(currentRefreshToken_Database.userId);
            const accessToken = user.generateAccessToken();

            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                maxAge: 15 * 60 * 1000
            });

            return res.status(200).json({ message: "Create access token succuessful" });


        } else {
            return res.status(401).send({ message: "Refresh token not found or invalid" });
        }


    } catch (error) {
        console.error("Error from /server/controllers/auth.js at refreshTokenUser Controller: " + error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const check = (req, res) => {
    try {
        return res.status(200).send(req.user);

    } catch (error) {
        console.error("Error from /server/controllers/auth.js at check Controller: " + error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}



export {
    login, logout, refreshToken, check
}