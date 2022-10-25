import { configureStore } from '@reduxjs/toolkit';

import fetchReducer from './fetchSlice';

const store = configureStore({
  reducer: {
    fetchData: fetchReducer,
  },
});

export default store;
export { fetchData } from './fetchSlice';
