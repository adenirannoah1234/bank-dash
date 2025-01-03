import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from 'next-auth';

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      },
      logoutUser: (state) => {
        state.user = null;
      },
    },
  
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;