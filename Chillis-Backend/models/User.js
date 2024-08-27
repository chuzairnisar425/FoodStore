import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    cartItems: {
        type: Array,
        default: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "food",
            },
        ],
    },
    otp: {
        type: Number,
        default: 0,
    },

});

export const User = mongoose.model('user', userSchema);
