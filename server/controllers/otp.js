import Otp from "../models/otp.js";
import nodemailer from 'nodemailer';
import { User } from "../models/user.js";
import emailTemplate from "../utils/emailTemplate.js";

const sendOTP = async (req, res) => {
    try {

        if(!req.body.email || !req.body.purpose || !req.body.userName) 
            return res.status(400).json({message: "Missing required fields!"});

        if(req.body.purpose !== 'verify-email' && req.body.purpose !== 'reset-password')
            return res.status(400).json({message: "Purpose incorrect format"});

        const otp = Otp.generateOTP();
        await new Otp({
            email: req.body.email,
            otp: otp,
            purpose: req.body.purpose
        }).save();

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
            html: emailTemplate(req.body.userName,otp,req.body.purpose)
        };

        await transporter.sendMail(mailOption);
        return res.status(201).json({ message: "Send OTP successfully" });
      
    } catch (error) {
        console.error("Error from /server/controllers/otp.js at sendOTP controller:  " + error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


const verifyOTP = async (req, res) => {
    try {
    
        if(!req.body.otp) return res.status(400).json({message: "Invalid or expired OTP"});
        
        const isValidOTP = await Otp.findOne({otp: req.body.otp});
        if(!isValidOTP) return res.status(400).json({message: "Invalid or expired OTP"});
        
        const purpose = isValidOTP.purpose;

        if(purpose === 'reset-password'){
            
            return res.status(200).json({message: "Verify successfully"});
        }

        if(!req.body.userName || !req.body.password || !req.body.email)
            return res.status(400).json({message: "Missing required fields!"});

        await Otp.findOneAndDelete({_id: isValidOTP._id});
        await new User({
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email
        }).save();
        
        return res.status(201).json({message: "OTP verified and account created successfully"});
    
    } catch (error) {
        console.error("Error from /server/controllers/otp.js at verifyOTP controller: " + error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


export { sendOTP, verifyOTP };