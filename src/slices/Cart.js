import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      state.cartItems.push(payload);
    },
    removeFromCart(state, { payload }) {
      const nextCartItems = state.cartItems.filter((i) => i.id !== payload.id);
      state.cartItems = nextCartItems;
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
