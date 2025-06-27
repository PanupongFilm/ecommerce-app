import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';

//Router
import registerRoute from './routes/user.js';

//Load environment variables
dotenv.config();
const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());
app.use(compression());
app.use(morgan('short'));

// Routes Middleware
app.use('/user', registerRoute);


app.get('/',(req,res)=>{
    res.send("Hello world");
})









export default app;