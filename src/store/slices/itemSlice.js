import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getItem, setItem } from "../../hooks/ls";

const initial = {
  items: [...getItem("items")],
};

const itemSlice = createSlice({
  name: "items",
  initialState: initial,
  reducers: {
    addItem: (s, a) => {
      s.items.push({
        id: nanoid(),
        ...a.payload,
        isChecked: false,
      });
      setItem("items", s.items);
    },
    deleteItem: (s, a) => {
      const temp = s.items.filter((c) => c.id !== a.payload);
      s.items = temp;
      setItem("items", temp);
    },
    deleteItemsByGroup: (s, a) => {
      const temp = s.items.filter((c) => c.category !== a.payload);
      s.items = temp;
      setItem("items", temp);
    },
    updateItem: (s, a) => {
      const temp = s.items;
      temp.map((item, i) => {
        if (item.id === a.payload.id) {
          temp[i].itemName = a.payload.itemName;
          temp[i].qty = a.payload.qty;
          temp[i].unit = a.payload.unit;
        }
      });
      s.items = temp;
      setItem("items", temp);
    },
    selectItem: (s, a) => {
      const temp = s.items;
      temp.map((item, i) => {
        if (item.id === a.payload.id) {
          temp[i].isChecked = a.payload.isChecked;
        }
      });
      s.items = temp;
      setItem("items", temp);
    },
    selectItems: (s, a) => {
      const temp = s.items;
      temp.map((item, i) => {
        temp[i].isChecked = a.payload;
      });
      s.items = temp;
      setItem("items", temp);
    },
    deleteSelectedItem: (s, a) => {
      const temp = s.items.filter((c) => !c.isChecked);
      s.items = temp;
      setItem("items", temp);
    },
  },
});

export const {
  addItem,
  deleteItem,
  deleteItemsByGroup,
  updateItem,
  selectItem,
  selectItems,
  deleteSelectedItem,
} = itemSlice.actions;

export default itemSlice.reducer;
