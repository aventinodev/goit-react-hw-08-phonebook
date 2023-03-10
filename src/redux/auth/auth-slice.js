import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, currentUser, logOut } from './auth-operations';
const initialState = {
  user: {},
  token: '',
  isLogged: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(signUp.fulfilled, (store, action) => {
        const { user, token } = action.payload;
        store.isLoading = false;
        store.user = user;
        store.token = token;
        store.isLogged = true;
      })
      .addCase(signUp.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      })
      .addCase(logIn.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(logIn.fulfilled, (store, action) => {
        const { user, token } = action.payload;
        store.isLoading = false;
        store.user = user;
        store.token = token;
        store.isLogged = true;
      })
      .addCase(logIn.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      })
      .addCase(currentUser.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(currentUser.fulfilled, (store, action) => {
        const { user, token } = action.payload;
        console.log(action.payload);
        store.isLoading = false;
        store.user = { ...user };
        store.token = token;
        store.isLogged = true;
      })
      .addCase(currentUser.rejected, (store, action) => {
        store.isLoading = false;
        store.token = '';
        store.error = action.payload;
      })
      .addCase(logOut.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(logOut.fulfilled, store => {
        store.isLoading = false;
        store.user = {};
        store.token = '';
        store.isLogged = false;
      })
      .addCase(logOut.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      });
  },
});

export default authSlice.reducer;
