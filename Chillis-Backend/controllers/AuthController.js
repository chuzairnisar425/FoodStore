import { User } from "../models/User";
import bcrypt from "bcrypt";
import { jwt } from "jsonwebtoken";

//signup routes

export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        let user = await User.findOne({
            email,
        });
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

        await user.save();
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


// login route

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Please Signup',
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Credentials',
            })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1hr',
        })

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        }).status(200).json({
            success: true,
            message: 'Login Successful'
        })



    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

// logout routes 
export const logout = async => {
    try {

    } catch (error) {
        res.status(500).json({
            success: false,
            messgae: error.message,
        })

    }
}