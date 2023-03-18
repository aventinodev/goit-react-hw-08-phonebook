import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    operation: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, store => {
        store.isLoading = true;
        store.operation = 'fetch';
      })
      .addCase(fetchContacts.fulfilled, (store, action) => {
        store.isLoading = false;
        store.error = null;
        store.items = action.payload;
        store.operation = null;
      })
      .addCase(fetchContacts.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      })
      .addCase(addContact.pending, store => {
        store.isLoading = true;
        store.operation = 'add';
      })
      .addCase(addContact.fulfilled, (store, action) => {
        store.isLoading = false;
        store.operation = null;
        store.items.push(action.payload);
      })
      .addCase(addContact.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      })
      .addCase(deleteContact.pending, (store, action) => {
        store.isLoading = true;
        console.log(action);
        console.log(action.meta.arg);
        store.operation = action.meta.arg;
      })
      .addCase(deleteContact.fulfilled, (store, action) => {
        store.isLoading = false;
        store.operation = null;

        store.items = store.items.filter(item => item.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      });
  },
});

export default contactsSlice.reducer;
