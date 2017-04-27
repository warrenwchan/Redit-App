import React, { PropTypes } from 'react';

import Post from './../../components/Post';

const PostList = ({ post, i, upVote }) => (
  <div>
      <Post
        post={post}
        key={i}
        vote={post.votes}
        upVote={upVote}
      />
  </div>
);

PostList.propTypes = {
  post: PropTypes.object.isRequired,
  upVote: PropTypes.func.isRequired
};

export default PostList;
