import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://randomuser.me/api/?results=5';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const res = await axios.get(API_URL);

  const bookDetail = [];
  const bookValue = Object.values(res.data);
  const bookKey = Object.keys(res.data);
  bookValue.forEach((data) => {
    bookDetail.push(data[0]);
  });
  const finalData = bookDetail.map((file, i) => {
    file.item_id = bookKey[i];
    return file;
  });
  return finalData;
});
const cartInitialState = {
  isToggled: false,
  notification: null,
};
const myCart = createSlice({
  name: 'cart',
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
