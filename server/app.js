import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

//Router
import registerRoute from './routes/user.js';
import authRoute from './routes/auth.js';
import optRoute from './routes/otp.js';

//Load environment variables
dotenv.config();
const app = express();

// Middleware setup
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(compression());
app.use(morgan('short'));
app.use(cookieParser());

// Routes Middleware
app.use('/user', registerRoute);
app.use('/user',authRoute);
app.use('/otp',optRoute);


app.get('/',(req,res)=>{
    res.send("Hello world");
})









export default app;