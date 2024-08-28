import { Food } from "../models/Food";
import { User } from "../models/User";

// Add to cart route 

export const addToCart = async (req, res) => {
    const userId = req.params.id;
    const { id, name, price, rating, image, quantity } = req.body

    try {

    } catch (error) {
        return res.status(500).json({
            success: true,
            message: error.message
        })
    }
}