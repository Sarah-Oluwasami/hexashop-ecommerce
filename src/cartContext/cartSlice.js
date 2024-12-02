import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: JSON.parse(localStorage.getItem("carts")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.carts.find(
        (cart) => cart.id === action.payload.id
      );
      if (itemInCart) {
        // If item already in cart, increase its quantity
        itemInCart.itemQuantity++;
      } else {
        // Add new item to cart with itemQuantity initialized
        state.carts.push({ ...action.payload, itemQuantity: 1 });
      }
      localStorage.setItem("carts", JSON.stringify(state.carts))
    },

    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },

    increaseItemQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload);
      if (item) {
        item.itemQuantity++;
      }
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },

    decreaseItemQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload);
      if (item && item.itemQuantity > 1) {
        item.itemQuantity -= 1;
      } 
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },

    clearCart: (state) => {
      state.carts = [];
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
