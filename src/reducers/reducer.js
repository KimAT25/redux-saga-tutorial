import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/actions';

const initialState = {};

const myReducer = createReducer(initialState,
  (builder) => {
    builder
      // .addCase(actions.GET_USERS_FETCH, (state, action) => { state.isLoading = true })
      .addCase(actions.GET_USERS_SUCCESS, (state, action) => {
        // state.isLoading = false;
        state.users = action.users
      })
      // .addCase(actions.GET_POSTS_FETCH, (state, action) => { state.isLoading = true })
      .addCase(actions.GET_POSTS_SUCCESS, (state, action) => {
        // state.isLoading = false;
        state.posts = action.posts
      })
      // .addCase(actions.GET_COMMENTS_FETCH, (state, action) => { state.isLoading = true })
      .addCase(actions.GET_COMMENTS_SUCCESS, (state, action) => {
        // state.isLoading = false;
        state.comments = action.comments
      })
      .addCase(actions.SELECTED_POST, (state, action) => {
        state.selectedPost = action.payload.selectedPost;
      })
      .addCase(actions.GENERAL_FAILURE, (state, action) => {
        // state.isLoading = false;
        state.error = action.error;
      })
      .addDefaultCase(() => { });
  })

export default myReducer;
