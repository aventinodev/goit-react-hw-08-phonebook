import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/api/auth-api';

export const signUp = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.signUpUser(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.logInUser(data);

      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      if (!auth.token) {
        console.log(auth);
        console.log('mistake');
        return rejectWithValue();
      }
      const data = await api.refreshUser(auth.token);
      console.log(data);

      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
  // {
  //   condition: (_, { getState }) => {
  //     const { auth } = getState();
  //     if (!auth.token) {
  //       return false;
  //     }
  //   },
  // }
);
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logOut();
      return data;
    } catch ({ response }) {
      rejectWithValue(response);
    }
  }
);
