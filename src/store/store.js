import { configureStore } from "@reduxjs/toolkit";

// Slices
import itemSlice from './slices/itemSlice'
import categorySlice from "./slices/categorySlice";

const store = configureStore({
    reducer: {
        categories: categorySlice,
        items: itemSlice
    }
})

export default store