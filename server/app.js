import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import multer from 'multer';


//Router
import registerRoute from './routes/user.js';
import authRoute from './routes/auth.js';
import optRoute from './routes/otp.js';
import adminRoute from './routes/admin.js';

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
app.use('/upload',express.static('/'))

// Routes Middleware
app.use('/user', registerRoute);
app.use('/user',authRoute);
app.use('/otp',optRoute);
app.use('/admin',adminRoute);


app.get('/',(req,res)=>{
    res.send("Hello world");
})


app.use((error,req,res,next)=>{

    if(error instanceof multer.MulterError){
        console.error("Error from /server/app.js at Error handling middleware from multer: ", error);
        return res.status(400).json({ message: "Upload failed: " + error.message});
    }
    else if(error){
    return res.status(error.status||500).json({ message: "Internal Server Error"});
    }
});



export default app;