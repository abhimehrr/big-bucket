import { configureStore } from "@reduxjs/toolkit";

// Slices
import itemSlice from './slices/itemSlice'
import categorySlice from "./slices/categorySlice";
import todoSlice from "./slices/todoSlice";

const store = configureStore({
    reducer: {
        categories: categorySlice,
        items: itemSlice,
        todos: todoSlice
    }
})

export default store