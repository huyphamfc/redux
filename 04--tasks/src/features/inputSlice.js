import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: { content: '' },
  reducers: {
    inputTask(state, action) {
      state.content = action.payload;
    },
  },
});

export const { inputTask } = inputSlice.actions;
export default inputSlice.reducer;
