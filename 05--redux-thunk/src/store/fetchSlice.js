import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchSlice = createSlice({
  name: 'fetchData',
  initialState: {
    status: null,
    posts: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, state => {
        state.status = 'Loading...';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'Success';
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = action.error.message;
      });
  },
});

const fetchData = createAsyncThunk('fetchData', async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) throw new Error('Something went wrong!');

    return await res.json();
  } catch (err) {
    throw err;
  }
});

export { fetchData };
export default fetchSlice.reducer;
