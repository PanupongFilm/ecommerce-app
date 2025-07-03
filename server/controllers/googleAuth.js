import axios from 'axios';
import { User } from '../models/user.js';
import RefreshToken from '../models/refreshToken.js';
import { makeCookie, clearCookie } from "../utils/setCookie.js";
import makeRefreshToken from '../utils/makeRefreshToken.js';



const googleAuth = async (req, res) => {
    try {

        const accessToken = req.body.token;

        if (!accessToken) return res.status(400).json({ message: "Token is required" });

        const response = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const payload = response.data;


        const userValidation = await User.findOne({ email: payload.email });

        if (!userValidation) {

            const user = await new User({
                email: payload.email,
                googleId: payload.sub
            }).save();

            const accessToken = user.generateAccessToken();

            const refreshToken = makeRefreshToken(req,user._id);
            const newRefreshToken = await new RefreshToken(refreshToken).save();

            makeCookie(res,accessToken,refreshToken.token,newRefreshToken._id.toString());

            return res.status(201).json({ message: "Create user and login successful" });
        }

        else {

            const accessToken = userValidation.generateAccessToken();

            const refreshToken = makeRefreshToken(req,userValidation._id);
            const newRefreshToken = await new RefreshToken(refreshToken).save();

            makeCookie(res, accessToken, refreshToken.token, newRefreshToken._id.toString());

            return res.status(200).json({ message: "Login successful" });

        }

    } catch (error) {
        console.error("Error from /server/controllers/googleAuth.js at googleAuth controller: " + error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default googleAuth