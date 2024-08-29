import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/slices/CartSlices';
import categoryReducer from '../redux/slices/CategorySlice';
import searchReducer from '../redux/slices/SearchSlice';
import authReducer from '../redux/slices/AuthSlice';

export const Store = configureStore({
    reducer: {
        cart: cartReducer,
        category: categoryReducer,
        search: searchReducer,
        auth: authReducer,
    }
});
