import { createSlice } from '@reduxjs/toolkit';
import * as type from '../models';

const initialState: type.CounterState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      if (state.counter === 0) {
        return;
      } else {
        state.counter--;
      }
    },
    reset: (state) => {
      state.counter = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
// Qui si usa reducer al singolare perchè createSlice unifica in un unico reducer
// tutte le funzioni reducer al suo interno, nella prop reducers: {}
export default counterSlice.reducer;
