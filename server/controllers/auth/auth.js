import { User, validation } from "../../models/auth/user.js";
import RefreshToken from '../../models/auth/refreshToken.js';
import { makeCookie, clearCookie } from "../../utils/setCookie.js";
import makeRefreshToken from "../../utils/makeRefreshToken.js";
import jwt from 'jsonwebtoken';


const login = async (req,res,next) => {
    try {
        const user = await User.findOne({ userName: req.body.userName });
        if (!user) return res.status(401).json({ message: "Incorrect username or password" });

        const isMatch = await user.comparePassword(req.body.password);
        if (!isMatch) return res.status(401).json({ message: "Incorrect username or password" });

        const accessToken = user.generateAccessToken();

        const refreshToken = makeRefreshToken(req, user._id);
        const newRefreshToken = await new RefreshToken(refreshToken).save();

        makeCookie(res, accessToken, refreshToken.token, newRefreshToken._id.toString());

        return res.status(200).json({ message: "Login successful" });


    } catch (error) {
        console.error("Error from /server/controllers/auth/auth.js at loginUser Controller: " + error);
        next(error);
    }
}

const logout = async (req,res,next) => {
    try {

        const currentRefreshToken = req.cookies.refreshToken;
        const currentRefreshTokenId = req.cookies.refreshTokenId
        const user = req.user

        if (currentRefreshToken && currentRefreshTokenId) {

            await RefreshToken.findOneAndDelete({ _id: currentRefreshTokenId });
        }

        else if ((!currentRefreshToken && currentRefreshTokenId) || (currentRefreshToken && !currentRefreshTokenId)) {

            await RefreshToken.deleteMany({ userId: req.user._id });
        }

        clearCookie(res)
        res.status(200).json({ message: "Logout successful" });

    } catch (error) {
        console.error("Error from /server/controllers/auth/auth.js at logoutUser Controller: " + error);
        next(error);
    }
}

const refreshToken = async (req,res,next) => {
    try {
        const currentRefreshToken_cookie = req.cookies.refreshToken;
        const currentRefreshTokenId_cookie = req.cookies.refreshTokenId;

        if (currentRefreshToken_cookie && currentRefreshTokenId_cookie) {

            const currentRefreshToken_Database = await RefreshToken.findById(currentRefreshTokenId_cookie);

            if (!currentRefreshToken_Database) {
                clearCookie(res)
                return res.status(401).send({ message: "Refresh token not found or invalid" });
            }

            const isMatch = await currentRefreshToken_Database.compareRefreshToken(currentRefreshToken_cookie);
            if (!isMatch) {
                clearCookie(res);
                await RefreshToken.findOneAndDelete({ _id: currentRefreshTokenId_cookie });

                return res.status(401).send({ message: "Refresh token not found or invalid" });
            }

            const user = await User.findById(currentRefreshToken_Database.userId);
            const accessToken = user.generateAccessToken();

            makeCookie(res, accessToken);

            return res.status(200).json({ message: "Create access token successful" });


        } else {
            return res.status(401).send({ message: "Refresh token not found or invalid" });
        }


    } catch (error) {
        console.error("Error from /server/controllers/auth/auth.js at refreshTokenUser Controller: " + error);
        next(error);
    }
}

const check = (req, res, next) => {
    try {
        return res.status(200).send(req.user);

    } catch (error) {
        console.error("Error from /server/controllers/auth/auth.js at check Controller: " + error);
        next(error);
    }
}

const forgotPassword = async (req,res, next)=>{
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(404).json({message: "Email is invalid"});

        const payload = {
            email: req.body.email,
            purpose: "reset-password"
        }

        const dataToken = jwt.sign(payload,process.env.TOKEN_SECRET,{expiresIn:'4m'});
        res.cookie('dataToken',dataToken,{
            httpOnly: true,
            secure: false,
            samesite: 'lax',
            maxAge: 4 * 60 * 1000
        })

        return res.status(202).json({ message: "Email is valid" });

    }catch(error){
        console.error("Error from /server/controllers/auth/auth.js at forgotPassword Controller: " + error);
        next(error);
    }
}

const resetPassword = async (req,res,next)=>{
    try{
        const { error } = validation(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const user = await User.findOne({email: req.user.email});
        if(!user) return res.status(404).json({message:"User not found"});

        user.password = req.body.password;
        await user.save();

        return res.status(200).json({message: "Password has been reset successfully"});
    }
    catch(error){
        console.error("Error from /server/controllers/auth/auth.js at resetPassword Controller: " + error);
        next(error); 
    }
}

export {
    login, logout, refreshToken, check, forgotPassword, resetPassword
}