import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../Features/booksSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
