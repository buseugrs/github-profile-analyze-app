// Management the GitHub user's infos and repo list.

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
  "github/fetchUser", //sliceName/actionName-- action name
  async (username) => {
    const userResponse = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const reposResponse = await axios.get(userResponse.data.repos_url);
    return { user: userResponse.data, repos: reposResponse.data };
  }
);

const githubSlice = createSlice({
  name: "github", // name for slice
  initialState: {
    user: null,
    repos: [],
    loading: false,
    error: null,
  },
  reducers: {}, // defining actions
  extraReducers: {
    [fetchUser.pending]: (state) => {
      // state update for fetchUser.pending status
      state.loading = true;
      state.error = null;
    },
    [fetchUser.fulfilled]: (state, action) => {
      // state update for fetchUser.fulfilled status
      state.loading = false;
      state.user = action.payload.user;
      state.repos = action.payload.repos;
    },
    [fetchUser.rejected]: (state, action) => {
      // state update for fetchUser.rejected status
      state.loading = false;
      state.error = action.error.message;
    },
  }, // specify how actions coming from async or other slices will be processed
});

export default githubSlice.reducer;
