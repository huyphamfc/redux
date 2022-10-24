import { configureStore } from '@reduxjs/toolkit';

import { inputSlice, taskSlice } from '../features/';

const store = configureStore({
  reducer: {
    input: inputSlice,
    task: taskSlice,
  },
});

export default store;
