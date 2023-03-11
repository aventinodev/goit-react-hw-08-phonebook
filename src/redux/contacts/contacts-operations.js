import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import * as api from 'services/api/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();

      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const result = await api.addContact(data);
      toast.success('Сontact added successfully');
      return result;
    } catch ({ response }) {
      toast.error('Sorry,something is wrong');
      return thunkAPI.rejectWithValue(response.data);
    }
  }
  // {
  //   condition: (data, { getState }) => {
  //     const { contacts } = getState();
  //     const normalizedName = data.name.toLowerCase();
  //     const result = contacts.items.find(contact => {
  //       return (
  //         contact.name.toLowerCase() === normalizedName ||
  //         contact.phone === data.phone
  //       );
  //     });
  //     if (result) {
  //       alert('Such name or number is aledy exist');
  //       return false;
  //     }
  //   },
  // }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      await api.deleteContact(id);
      toast.success('Сontact deleted successfully');
      return id;
    } catch ({ response }) {
      toast.error('Sorry,something is wrong');
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
