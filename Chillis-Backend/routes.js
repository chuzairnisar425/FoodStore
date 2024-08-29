import express from "express";
import {
    getUser,
    login,
    logout,
    resetPassword,
    signup,
    verifyOtp,
} from "./controllers/AuthController.js"; // Note the .js extension
import { verifyToken } from "./middlewares/verifyToken.js";
import {
    addToCart,
    checkOut,
    clearCart,
    decrementQuantity,
    getCart,
    incrementQuantity,
    removeFromCart,
} from "./controllers/FeatureController.js";

export const router = express.Router();

// Auth routes
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.put("/reset-password", resetPassword);
router.put("/verify-otp", verifyOtp);
router.get("/get-user", verifyToken, getUser);

// feature route
router.post("/add-to-cart/:id", addToCart);
router.get("/get-cart:id", getCart);
router.delete("remove-from-cart/:id", removeFromCart);
router.put("/increment-quantity/:id", incrementQuantity);
router.put("/decrement-quantity/:id", decrementQuantity);

router.get("/checkout", verifyToken, checkOut);
router.get("/clear-cart", verifyToken, clearCart);
