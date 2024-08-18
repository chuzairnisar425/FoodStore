import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/slices/CartSlices"; // import the reducer
import categoryReducer from '../redux/slices/CategorySlice'
export const Store = configureStore({
    reducer: {
        cart: cartReducer, // use the reducer here
        category: categoryReducer,
    }
});
