import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './contacts-operations';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (store, action) => {
        store.isLoading = false;
        store.error = null;
        store.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      })
      .addCase(fetchAddContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchAddContact.fulfilled, (store, action) => {
        store.isLoading = false;
        store.items.push(action.payload);
      })
      .addCase(fetchAddContact.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      })
      .addCase(fetchDeleteContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (store, action) => {
        store.isLoading = false;

        store.items = store.items.filter(item => item.id !== action.payload);
      })
      .addCase(fetchDeleteContact.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      });
  },
});

export default contactsSlice.reducer;
