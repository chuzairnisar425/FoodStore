import { User } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // Corrected the import

// Signup route
export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "Please Login",
            });
        }
        const securePassword = await bcrypt.hash(password, 10);
        user = await User.create({
            name,
            email,
            password: securePassword,
        });

        res.status(200).json({
            success: true,
            message: 'Signup Successful',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Login route
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Please Signup',
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Credentials',
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1hr',
        });

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        }).status(200).json({
            success: true,
            message: 'Login Successful',
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Logout route
export const logout = async (req, res) => {
    try {
        res.clearCookie('token').json({
            success: true,
            message: 'Logged Out',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get user route
export const getUser = async (req, res) => { // Corrected the typo in async
    const userId = req.id; // Assuming req.id contains the user ID
    try {
        let user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User not found',
            })

        }
        return res.status(200).json({
            success: true,
            user,
            message: 'User found'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// reset password route 

export const resetPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const generateOtp = Math.floor(Math.random() * 10000)// generate 4 digit number
        let user = User.findOne({ email })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}