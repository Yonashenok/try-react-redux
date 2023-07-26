import { configureStore } from "@reduxjs/toolkit";
import myCartReducer from "./myCart";
import myShoppingReducer from "./shoppingCart";
const store = configureStore({
  reducer: { cart: myCartReducer, shopping: myShoppingReducer },
});

export default store;
