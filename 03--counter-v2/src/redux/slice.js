import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true,
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseCounter(state) {
      state.counter++;
    },
    decreaseCounter(state) {
      state.counter--;
    },
  },
});

export const { increaseCounter, decreaseCounter } = slice.actions;

export default slice.reducer;
