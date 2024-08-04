import { createAction } from '@reduxjs/toolkit';

export const GET_POSTS_FETCH = createAction('GET_POSTS_FETCH');
export const GET_COMMENTS_FETCH = createAction('GET_COMMENTS_FETCH');
export const GET_USERS_FETCH = createAction('GET_USERS_FETCH');

export const GET_POSTS_SUCCESS = createAction('GET_POSTS_SUCCESS');
export const GET_COMMENTS_SUCCESS = createAction('GET_COMMENTS_SUCCESS');
export const GET_USERS_SUCCESS = createAction('GET_USERS_SUCCESS');

export const GENERAL_FAILURE = createAction('GENERAL_FAILURE');

export const SELECTED_POST = createAction('SELECTED_POST',
  (post) => ({ payload: { selectedPost: post } }))

export const EXIT_APP = createAction('EXIT_APP');