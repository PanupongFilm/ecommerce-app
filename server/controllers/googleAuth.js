import { OAuth2Client } from 'google-auth-library';
import { User } from '../models/user.js';
import RefreshToken from '../models/refreshToken.js';
import { makeCookie , clearCookie } from "../utils/setCookie.js";


const googleAuth = async (req, res) => {
    try {
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

        const tokenFromFrontend = req.body.token;

        if (!tokenFromFrontend) {
            return res.status(400).json({ message: 'Token is required' });
        }

        const data = await client.verifyIdToken({

            idToken: tokenFromFrontend,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const payload = data.getPayload();

        const userValidation = await User.findOne({ email: payload.email });

        if (!userValidation) {

            const user = await new User({
                email: payload.email,
                googleId: payload.sub
            }).save();

            const accessToken = user.generateAccessToken();

            const refreshToken = RefreshToken.generateRefreshToken();
            const now = new Date();
            const expiresAt = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
            const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            const userAgent = req.headers['user-agent'];

            const newRefreshToken = await new RefreshToken({
                token: refreshToken,
                userId: user._id,
                expiresAt: expiresAt,
                ipAddress: ipAddress,
                userAgent: userAgent
            }).save();


            makeCookie(res,accessToken,refreshToken,newRefreshToken._id.toString());

            return res.status(200).json({ message: "Create user and login successful" });
        }

        else {

            const accessToken = userValidation.generateAccessToken();

            const refreshToken = RefreshToken.generateRefreshToken();
            const now = new Date();
            const expiresAt = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
            const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            const userAgent = req.headers['user-agent'];

            const newRefreshToken = await new RefreshToken({
                token: refreshToken,
                userId: userValidation._id,
                expiresAt: expiresAt,
                ipAddress: ipAddress,
                userAgent: userAgent
            }).save();

            makeCookie(res,accessToken,refreshToken,newRefreshToken._id.toString());

            return res.status(200).json({ message: "Login successful" });

        }

    } catch (error) {
        console.error("Error from /server/controllers/googleAuth.js at googleAuth controller: " + error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default googleAuth