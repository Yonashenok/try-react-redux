import { createSlice } from "@reduxjs/toolkit";
const cartInitialState = {
  isToggled: false,
  notification: null,
};
const myCart = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    toggle(state) {
      state.isToggled = !state.isToggled;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const cartAction = myCart.actions;
export default myCart.reducer;
