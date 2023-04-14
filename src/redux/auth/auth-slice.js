import { createSlice } from '@reduxjs/toolkit';

import { register, logIn, logOut, refreshUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](store, {payload}) {
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [logIn.fulfilled](store, {payload}) {
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [logOut.fulfilled](store) {
      store.user = { name: null, email: null };
      store.token = null;
      store.isLogin = false;
    },
    [refreshUser.pending](store) {
      store.isRefreshing = true;
    },
    [refreshUser.fulfilled](store, {payload}) {
      store.user = payload;
      store.isLogin = true;
      store.isRefreshing = false;
    },
    [refreshUser.rejected](store) {
      store.isRefreshing = false;
    },
  },
});

export const authSliceReducer = authSlice.reducer;
