import { Food } from "../models/Food";
import { User } from "../models/User";


import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_KEY)

// Add to cart route

export const addToCart = async (req, res) => {
    const userId = req.params.id;
    const { id, name, price, rating, image, quantity } = req.body;

    try {
        let existingItem = await Food.findOne({ id, userId: userId });
        if (existingItem) {
            let updatedItem = await Food.findOneAndUpdate(
                { id, userId: userId },
                {
                    $set: {
                        quantity: existingItem.quantity + 1,
                        totalPrice: existingItem.price + (existingItem.quantity + 1),
                    },
                },
                {
                    upsert: true,
                    new: true,
                }
            );

            if (!updatedItem) {
                return res.status(400).json({
                    success: false,
                    message: "Failed to add to cart",
                });
            }
            return res.status(200).json({
                success: true,
                message: "Added to cart",
            });
        }

        let newFood = await Food.create({
            id,
            name,
            price,
            rating,
            image,
            quantity,
            userId,
            totalPrice: price * quantity,
        });
        const savedFood = await newFood.save();
        let user = await User.findOneAndUpdate(
            { _id: userId },
            {
                $push: {
                    cartItems: savedFood._id,
                },
            }
        );
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Failed to add to cart",
            });
        }
        return res.status(200).json({
            success: true,
            message: " Added to cart",
        });
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: error.message,
        });
    }
};

// get cart route

export const getCart = async (req, res) => {
    const userId = req.params.id;

    try {
        const cartItems = await Food.find({ userId });

        if (!cartItems) {
            return res.status(400).json({
                success: false,
                message: "No items found",
            });
        }
        return res.status(200).json({
            success: true,
            cartItems,
        });
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: error.message,
        });
    }
};

// Remove from cart route

export const removeFromCart = async (req, res) => {
    const id = req.params.id;
    try {
        let food = await Food.findOneAndDelete({
            _id: id,
        });
        if (!food) {
            return res.status(400).json({
                success: false,
                message: "Food not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Food removed from cart",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// increment quantity

export const incrementQuantity = async (req, res) => {
    const id = req.params.id;
    try {
        let food = await Food.findOneAndUpdate(
            {
                _id: id,
            },
            {
                $set: {
                    quantity: { $add: ["$quantity", 1] },
                    totalPrice: {
                        $multiply: [
                            "$price",
                            {
                                $add: ["$quantity", 1],
                            },
                        ],
                    },
                },
            },
            {
                upsert: true,
                new: true,
            }
        );
        if (!food) {
            return res.status(400).json({
                success: false,
                message: "Food not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Food quantity incremented",
            food,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// decrement quantity route

export const decrementQuantity = async (req, res) => {
    const id = req.params.id;
    try {
        let food = await Food.findOneAndUpdate(
            {
                _id: id,
                quantity: { $gt: 0 },
            },
            {
                $set: {
                    quantity: {
                        $subtract: ["$quantity", 1],
                    },
                    totalPrice: {
                        $subtract: ["$totalPrice", "$price"]
                    },
                },
            },
            {
                upsert: true,
                new: true,
            }
        );

        if (!food) {
            return res.status(400).json({
                success: false,
                message: "Food not found or quantity already at the maximum",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Food quantity decremented",
            food,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// checkout route 


export const checkOut = async (req, res) => {
    const userId = req.id;

    try {

    } catch (error) {
        return res.status(500).json({
            success: false,
            meesage: error.message
        })
    }

}