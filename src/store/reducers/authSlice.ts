import { createSlice } from '@reduxjs/toolkit';

export interface InitialAuthState {
  user: string | null;
  isAuthenticated: boolean;
  status: LoginRequestStatus;
}

const initialState: InitialAuthState = {
  user: null,
  isAuthenticated: false,
  status: 'idle',
};

type LoginRequestStatus = 'login' | 'login-success' | 'login-failure' | 'idle';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.status = 'login';
    },
    loginSuccesss: state => {
      state.status = 'login-success';
      state.isAuthenticated = true;
    },
    loginError: state => {
      state.status = 'login-failure';
    },
    logout: state => {
      state.status = 'idle';
      state.isAuthenticated = false;
    },
    updateCurrentUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { login, loginError, loginSuccesss, logout, updateCurrentUser } =
  authSlice.actions;

export default authSlice.reducer;
