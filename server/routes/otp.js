import express from 'express';
import { sendOTP, verifyOTP } from '../controllers/otp.js';
const router = express.Router();

router.post('/sending',sendOTP);

router.post('/verifying',verifyOTP);


export default router;