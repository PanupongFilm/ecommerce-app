import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import { User } from "../models/user.js";
import emailTemplate from "../utils/emailTemplate.js";
import generateOTP from "../utils/generateOTP.js";
import makeRefreshToken from "../utils/makeRefreshToken.js";
import { makeCookie } from "../utils/setCookie.js";
import RefreshToken from "../models/refreshToken.js";


const sendOTP = async (req, res) => {
    try {

        if (req.body.purpose !== 'verify-email' && req.body.purpose !== 'reset-password')
            return res.status(400).json({ message: "Purpose incorrect format" });

        if (
            (req.body.purpose === 'verify-email') && (!req.body.userName || !req.body.password || !req.body.email) ||
            (req.body.purpose === 'reset-password') && (!req.body.email)
        ) {
            return res.status(400).json({ message: "Missing required fields!" });
        }

        const otp = generateOTP();
        const payload ={
            otp: otp,
            email: req.body.email,
            userName: req.body.userName,
            password: req.body.password,
            purpose: req.body.purpose
        }

        const otpToken = jwt.sign(payload,process.env.TOKEN_SECRET,{expiresIn: '1m'});
        

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOption = {
            from: 'Sparkko Shop <your-email@gmail.com>',
            to: req.body.email,
            subject: req.body.purpose === 'verify-email' ? 'Verify Your Email' : 'Reset Your Password',
            html: emailTemplate(otp, req.body.purpose)
        };

        await transporter.sendMail(mailOption);

        res.cookie('otpToken',otpToken,{
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                maxAge: 60 * 1000
            });

        return res.status(201).json({ message: "Send OTP successfully" });

    } catch (error) {
        console.error("Error from /server/controllers/otp.js at sendOTP controller:  " + error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


const verifyOTP = async (req, res) => {
    try {
        if (!req.body.otp) return res.status(400).json({ message: "IOTP is required" });

        if (!req.cookies.otpToken) return res.status(400).json({ message: "OTP token not found" });

        const payload = jwt.verify(req.cookies.otpToken,process.env.TOKEN_SECRET);

        if(req.body.otp !== payload.otp) return res.status(401).json({ message: "Invalid or expired OTP" });
        res.clearCookie('otpToken');

        if (payload.purpose === 'reset-password') {
            return res.status(200).json({ message: "Verify successfully" });
        }

        const user = await new User({
            userName: payload.userName,
            password: payload.password,
            email: payload.email
        }).save();

        const accessToken = user.generateAccessToken();

        const refreshToken = makeRefreshToken(req, user._id);
        const newRefreshToken = await new RefreshToken(refreshToken).save();

        makeCookie(res, accessToken, refreshToken, newRefreshToken._id.toString());
        return res.status(201).json({ message: "OTP verified and account created successfully" });

    } catch (error) {
        console.error("Error from /server/controllers/otp.js at verifyOTP controller: " + error);
        return res.status(401).json({ message: "Invalid or expired OTP" });
    }
}


export { sendOTP, verifyOTP };