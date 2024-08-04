import { call, put, take, fork, cancel, all } from 'redux-saga/effects';
import * as actions from '../actions/actions';
import * as API from '../utils/api';

function* getUsersSaga() {
  while (true) {
    try {
      yield take(actions.GET_USERS_FETCH);
      const users = yield call(API.getUsers);
      yield put({ type: actions.GET_USERS_SUCCESS, users });
    } catch (error) {
      yield put({ type: actions.GENERAL_FAILURE, error })
    }
  }
}

function* getCommentsSaga() {
  while (true) {
    try {
      yield take(actions.GET_COMMENTS_FETCH);
      const comments = yield call(API.getComments);
      yield put({ type: actions.GET_COMMENTS_SUCCESS, comments: comments });
    } catch (error) {
      yield put({ type: actions.GENERAL_FAILURE, error: error });
    }
  }
}

function* getPostsSaga() {
  while (true) {
    try {
      yield take(actions.GET_POSTS_FETCH);
      const posts = yield call(API.getPosts);
      yield put({ type: actions.GET_POSTS_SUCCESS, posts: posts });
    } catch (error) {
      yield put({ type: actions.GENERAL_FAILURE, error: error });
    }
  }
}


function* mySaga() {
  const users = yield fork(getUsersSaga)
  const posts = yield fork(getPostsSaga);
  const comments = yield fork(getCommentsSaga);

  yield take(actions.EXIT_APP);

  yield all([
    cancel(users),
    cancel(posts),
    cancel(comments)
  ]);
}

export default mySaga;
