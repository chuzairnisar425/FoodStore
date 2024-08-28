import express from "express";
import { getUser, login, logout, resetPassword, signup, verifyOtp } from "./controllers/AuthController.js"; // Note the .js extension
import { verifyToken } from "./middlewares/verifyToken.js";

export const router = express.Router();

// Auth routes
router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.put('/reset-password', resetPassword);
router.put('/verify-otp', verifyOtp);
router.get('/get-user', verifyToken, getUser);

