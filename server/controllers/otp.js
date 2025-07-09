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
        if(!req.cookies.dataToken) return res.status(400).json({message: "Missing required fields"});
        
        const payload = jwt.verify(req.cookies.dataToken,process.env.TOKEN_SECRET);

        const otp = generateOTP();
        const otpToken = jwt.sign({otp: otp}, process.env.TOKEN_SECRET, { expiresIn: '1m' });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOption = {
            from: 'Sparkko Shop <your-email@gmail.com>',
            to: payload.email,
            subject: payload.purpose === 'verify-email' ? 'Verify Your Email' : 'Reset Your Password',
            html: emailTemplate(otp, payload.purpose)
        };

        await transporter.sendMail(mailOption);

        res.cookie('otpToken',otpToken,{
            httpOnly: true,
            secure: false,
            samesite: 'lax',
            maxAge: 60 * 1000
        })

        return res.status(201).json({ message: "Send OTP successfully" });

    } catch (error) {
        console.error("Error from /server/controllers/otp.js at sendOTP controller:  " + error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


const verifyOTP = async (req, res) => {
    try {

        console.log(req.user);
        console.log(req.body.otp);

        if (!req.body.otp) return res.status(400).json({ message: "OTP is required" });

        if (!req.cookies.otpToken) return res.status(400).json({ message: "Invalid or expired OTP" });

        const otpPayload = jwt.verify(req.cookies.otpToken, process.env.TOKEN_SECRET);

        if (req.body.otp !== otpPayload.otp) return res.status(401).json({ message: "Invalid or expired OTP" });
        res.clearCookie('otpToken');

        const payload = req.user;

        if (payload.purpose === 'reset-password') {

            const resetPasswordToken = jwt.sign({
                email: payload.email
            }, process.env.TOKEN_SECRET, { expiresIn: "5m" });

            res.cookie('resetPasswordToken',resetPasswordToken,{
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                maxAge: 5*60*1000
            });

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