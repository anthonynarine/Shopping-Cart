import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/cart/modal/modalSlice";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});



//think of store as a cloud where you can access state

//see features cartSlice and modalSlice to see how 
// these compenents are connected and how logic and Data
// is passed. 