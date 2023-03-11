import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, refreshUser, logOut } from './auth-operations';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogged: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(signUp.pending, store => {
      //   store.isLoading = true;
      //   store.error = null;
      // })
      .addCase(signUp.fulfilled, (store, action) => {
        const { user, token } = action.payload;
        store.isLoading = false;
        store.user = user;
        store.token = token;
        store.isLogged = true;
      })
      // .addCase(signUp.rejected, (store, action) => {
      //   store.isLoading = false;
      //   store.error = action.payload;
      // })
      // .addCase(logIn.pending, store => {
      //   store.isLoading = true;
      //   store.error = null;
      // })
      .addCase(logIn.fulfilled, (store, action) => {
        const { user, token } = action.payload;
        store.isLoading = false;
        store.user = user;
        store.token = token;
        store.isLogged = true;
      })
      // .addCase(logIn.rejected, (store, action) => {
      //   store.isLoading = false;
      //   store.error = action.payload;
      // })
      // .addCase(logOut.pending, store => {
      //   store.isLoading = true;
      //   store.error = null;
      // })
      .addCase(logOut.fulfilled, store => {
        store.isLoading = false;
        store.user = { name: null, email: null };
        store.token = null;
        store.isLogged = false;
      })
      // .addCase(logOut.rejected, (store, action) => {
      //   store.isLoading = false;
      //   store.error = action.payload;
      // });
      .addCase(refreshUser.pending, store => {
        // store.isLoading = true;
        // store.error = null;
        store.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (store, action) => {
        console.log(action.payload);
        store.isLoading = false;
        store.user = { ...action.payload.user };
        store.token = action.payload.token;
        store.isRefreshing = false;
        store.isLogged = true;
      })
      .addCase(refreshUser.rejected, (store, action) => {
        // store.isLoading = false;
        // store.token = '';
        // store.error = action.payload;
        store.isRefreshing = false;
      });
  },
});

export default authSlice.reducer;
