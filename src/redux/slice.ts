import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../utils/types";
import { fetchPostsFromAPI } from "../utils/api";

interface State {
  posts: Post[];
}

const initialState: State = {
  posts: [],
};

export const slice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      return Object.assign({}, { ...state, posts: [...action.payload] });
    },
    deletePost: (state, action) => {
      const currentPosts = state.posts;
      const postIdToDelete = action.payload;
      const newPostsList = currentPosts.filter(
        (post) => post.id !== postIdToDelete
      );
      state.posts = newPostsList;
    },
    editPost: (state, action: { payload: { post: Post; index: number } }) => {
      const { index, post } = action.payload;
      const { posts } = state;
      state.posts = [...posts.slice(0, index), post, ...posts.slice(index + 1)];
    },
  },
  extraReducers: (builder) => {
    // Add reducers for asynchronous actions here, and handle loading state as needed
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = [...action.payload];
    });
  },
});
export const selectPosts = (state: { posts: State }) => {
  return state.posts.posts;
};

export const fetchPosts = createAsyncThunk("posts/fetchAll", async () => {
  const posts = await fetchPostsFromAPI();
  return posts;
});

export const { setPosts, deletePost, editPost } = slice.actions;

export default slice.reducer;
