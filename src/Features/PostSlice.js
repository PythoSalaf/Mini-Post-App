import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  post: [],
  loading: false,
  error: null,
};

export const getPost = createAsyncThunk("post/getPost", async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = response.json();
  return data;
});

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (postId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const createPost = createAsyncThunk("post/createPost", async (value) => {
  try {
    const config = {
      method: "POST",
      headers: {
        // "content-Type": "application/json",
        Accept: "application/json",
        Connection: "keep-alive",
      },
      body: {
        title: value.title,
        body: value.body,
      },
    };

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts`,
      config
    );

    //   success
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    throw error;
  }
});

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
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.post = payload;
      })
      .addCase(deletePost.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.post = payload;
      })
      .addCase(createPost.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default postSlice.reducer;
