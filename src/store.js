import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartContext/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice
  }
})

export default store;
