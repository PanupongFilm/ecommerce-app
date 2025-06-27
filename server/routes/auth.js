import express from 'express';
import {login , logout , refreshToken} from '../controllers/auth.js';
const router = express.Router();


router.post('/login',login);




export default router;