import express from 'express';
import cors from 'cors';  // Corrected whitespace issue
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDb } from './connection.js';


dotenv.config();  // dotenv.config() should be called before using any environment variables
connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => console.log(`Server is running on port ${port}`));
