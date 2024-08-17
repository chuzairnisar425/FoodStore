import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/slices/CartSlices"; // import the reducer

export const Store = configureStore({
    reducer: {
        cart: cartReducer, // use the reducer here
    }
});
