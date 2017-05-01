import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Post from './../../components/Post';

const PostList = ({ posts, upVote }) =>{
  console.log(posts)
  return (
  <div>
    {posts.map((post, i) => {
           return   <Post
        post={post}
        key={i}
        vote={post.votes}
        upVote={upVote}
      />
        })}

  </div>
)};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostList;
