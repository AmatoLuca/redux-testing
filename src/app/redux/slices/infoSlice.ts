import { createSlice } from '@reduxjs/toolkit';
import * as type from '../models';

const initialState: type.Info = {
  user: {
    name: '',
    surname: '',
    age: 0,
    employee: '',
  },
  stack: [],
};

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    updateInfo: (state, action) => {
      const { user, stack } = action.payload;
      state.user = user || state.user;
      state.stack = stack || state.stack;
    },
    getInfo: (state) => {
      return state;
    },
  },
});

export const { updateInfo, getInfo } = infoSlice.actions;
export default infoSlice.reducer;
