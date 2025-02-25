import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../Features/Products/ProductSlice"
import cartReducer from "../Features/Cart/cartSlice"

export const store = configureStore({

   reducer: {
   cart: cartReducer,
    product: productReducer
   }

})