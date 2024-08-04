import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from './actions/actions';
import * as selectors from './selectors/selectors';

function App() {
  const myDispatch = useDispatch();

  useEffect(() => {
    myDispatch(actions.GET_POSTS_FETCH());
    myDispatch(actions.GET_COMMENTS_FETCH());
    myDispatch(actions.GET_USERS_FETCH());
  }, [myDispatch])

  const retrivedPosts = useSelector(selectors.allPosts);
  const selPost = useSelector(selectors.selectedPost);
  const selPostComments = useSelector(selectors.getCommentsForPost);
  const selPostAuthor = useSelector(selectors.getAutorForPost);

  const [selectedPostModeOn, setSelectedPostModeOn] = useState(false);

  const postSelected = (selectedPost) => {
    myDispatch(actions.SELECTED_POST(selectedPost));
  }

  return (
    <div className="App">
      <h3>The Blog App</h3>
      {selectedPostModeOn && (
        <div>
          {/* Back Button */}
          <button
            onClick={() => {
              myDispatch(actions.EXIT_APP());
              window.history.back();
              setSelectedPostModeOn(false);
            }}> Back </button>
          <br /> <hr />
          {/* Post */}
          <div>
            <code>Post Id: {selPost?.id ?? "No post selected"}</code>
            <h1>{selPost.title}</h1>
            <p>{selPost.body}</p>
            <p>
              <i>Written By: {selPostAuthor?.name ?? "No name"}</i>
            </p>
          </div> <hr />
          {/* Comments */}
          <p style={{ fontSize: 12, fontWeight: "bold" }}> Comments ({selPostComments.length}):</p>
          {selPostComments && selPostComments.map((comment) => (
            <div key={comment.id} style={{
              backgroundColor: "#e8e8e8",
              padding: 8,
              marginBottom: 8,
              borderRadius: 8
            }}>
              <p style={{ fontSize: 12, color: "#7d7d7d" }}>
                {comment.name} <br /> {comment.email}
              </p>
              <p style={{ fontSize: 12, fontWeight: "bold" }}>
                {comment.body}
              </p>
            </div>))}
        </div>
      )}
      {!selectedPostModeOn && (
        <div>
          <p>
            <b>Select a blog post from blow to read more:</b>
          </p>
          <hr />
          {retrivedPosts && retrivedPosts.map((post) => (
            <a href={`/#${post.id}`} onClick={() => {
              postSelected(post);
              setSelectedPostModeOn(true);
            }}
              key={post.id}>
              {post.id}: {post.title}
              <br />
            </a>))}
        </div>
      )}
    </div>
  )
}
export default App;
