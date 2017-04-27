import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostToolBar from '../../components/PostToolBar/';
import { PostList } from './../../containers/PostList/';

import Chip from 'material-ui/Chip';

import { data } from './../../mock-data';

import { upVote, sortNewest, sortPopular } from '../../redux/actions'


class PostListContainer extends Component {


  postCategories(category, i) {
    return (<Chip key={i}>{this.category}</Chip>);
  }

  upVote(id) {
    this.props.dispatch(upVote(id));
  }

  sortNewest(id) {
    this.props.dispatch(sortNewest(id));
  }

  sortPopular(posts) {
    this.props.dispatch(sortPopular(posts));
  }

  render() {
    return (
      <div>
        <PostToolBar
          newest={() => this.sortNewest()}
          popular={() => this.sortPopular()}
        />
        {data.posts.map((post, i) => {
           return <PostList
            post={post}
            key={i}
            upVote={() => this.upVote(post.id)}
          />
        })};
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(PostListContainer)

