import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getItem, setItem } from "../../hooks/ls";

const initial = {
  categories: [...getItem("categories")],
};

const categorySlice = createSlice({
  name: "category",
  initialState: initial,
  reducers: {
    addCategory: (s, a) => {
      s.categories.push({
        id: nanoid(),
        ...a.payload,
      });
      setItem("categories", s.categories);
    },
    pushCategory: (s, a) => {
      s.categories.push(a.payload);
      setItem("categories", s.categories);
    },
    deleteCategory: (s, a) => {
      const temp = s.categories.filter((c) => c.id !== a.payload);
      s.categories = temp;
      setItem("categories", temp);
    },
  },
});

export const { addCategory, pushCategory, deleteCategory } = categorySlice.actions;

export default categorySlice.reducer;
