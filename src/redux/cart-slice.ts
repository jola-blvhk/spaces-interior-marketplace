import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

interface CartItem {
  id: string | String;
  price: number;
  quantity: number;
  totalPrice: number;
  name: string | String;
  size: string;
  color: string;
  image: StaticImageData | string;
}

interface CartState {
  itemsList: CartItem[];
  totalQuantity: number;
  showCart: boolean;
  changed: boolean;
}

const initialState: CartState = {
  itemsList: [],
  totalQuantity: 0,
  showCart: false,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceData(
      state,
      action: PayloadAction<{ itemsList: CartItem[]; totalQuantity: number }>
    ) {
      state.totalQuantity = action.payload.totalQuantity;
      state.itemsList = action.payload.itemsList;
    },
    addToCart(state, action: PayloadAction<CartItem>) {
      state.changed = true;
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          size: newItem.size,
          color: newItem.color,
          image: newItem.image,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.changed = true;
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.itemsList = state.itemsList.filter((item) => item.id !== id);
          state.totalQuantity--;
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
