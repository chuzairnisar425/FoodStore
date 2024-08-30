import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDb } from './connection.js';
import { router } from './routes.js';
// Load environment variables from .env file
dotenv.config(); // dotenv.config() should be called before using any environment variables

// Connect to the database
connectDb();

const app = express();
const port = 5000;

// Middleware setup
app.use(cors(
    {
        origin: ['http://localhost:5173'],
        credentials: true,
    }
)); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser()); // Parse cookies

// Route setup
app.use('/api', router); // Use routes from the routes module

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
