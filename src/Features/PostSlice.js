import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("post/getPost", async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = response.json();
  return data;
});

const initialState = {
  post: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPost.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.post = payload;
      })
      .addCase(getPost.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default postSlice.reducer;
