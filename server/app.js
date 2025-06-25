import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';

//Load environment variables
dotenv.config();
const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());
app.use(compression());
app.use(morgan('short'));

//Router












export default app;