import { User, validation } from "../models/user.js";
import RefreshToken from '../models/refreshToken.js';


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

        await new RefreshToken({
            token: refresh_Token,
            userId: user._id,
            expiresAt: expiresAt,
            ipAddress: ipAddress,
            userAgent: userAgent

        }).save();


        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 15 * 60 * 1000
        });

        res.cookie('refreshToken', refresh_Token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({ message: "Login successful" });


    } catch (error) {
        console.error("Error from /server/controllers/auth.js at loginUser Controller: " + error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const logout = async (req, res) => {
    try {

        const currentRefreshToken = req.cookies.refreshToken;
        const userId = req.user.id;

        if(currentRefreshToken){
            const allToken = await RefreshToken.find({userId: userId});
            for(const token of allToken){
                const isMatch = await token.compareRefreshToken(currentRefreshToken);
                if(isMatch){
                    await RefreshToken.findByIdAndDelete(token._id);
                    break;
                }
            }
        }else{
            await RefreshToken.deleteMany({userId: userId});
        }
        
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        res.status(200).json({message: "Logout successful"});
     
    } catch (error) {
        console.error("Error from /server/controllers/auth.js at logoutUser Controller: " + error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const refreshToken = (req, res) => {
    try {

    } catch (error) {
        console.error("Error from /server/controllers/auth.js at refreshTokenUser Controller: " + error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export {
    login, logout, refreshToken
}