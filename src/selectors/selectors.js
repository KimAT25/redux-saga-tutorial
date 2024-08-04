import { createSelector } from 'reselect';

export const allPosts = (state) => state.posts;
export const allComments = (state) => state.comments;
export const allUsers = (state) => state.users;

export const selectedPost = (state) => state.selectedPost;

export const getCommentsForPost = createSelector(
  allComments, selectedPost, (comments, post) => {
    if (comments && post) {
      return comments.filter(comment => comment.postId === post.id);
    }
  }
);

export const getAutorForPost = createSelector(
  allUsers, selectedPost, (users, post) => {
    if (users && post) {
      return users.find(user => user.id === post.id);
    }
  }
)