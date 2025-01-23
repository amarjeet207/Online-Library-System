import { createSlice } from '@reduxjs/toolkit';
import { Books } from '../Utilities/booksData';

const booksSlice = createSlice({
  name: 'books',
  initialState: Books,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      return state.filter(book => book.id !== action.payload);
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
