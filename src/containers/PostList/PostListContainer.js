import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList  from './PostList';
import { getPosts, upVote, sortNewest, sortPopular } from '../../redux/actions'
import PostToolBar from '../../components/PostToolBar/';

import Chip from 'material-ui/Chip';
import { data } from './../../mock-data';

class PostListContainer extends Component {
  constructor(){
    super()
  }
  componentDidMount() {
    this.props.dispatch(getPosts('0'))
  }

  postCategories(category, i) {
    return (<Chip key={i}>{this.category}</Chip>);
  }

  upVote(id) {
    console.log(this.props)
    this.props.dispatch(upVote(id));
  }

  sortNewest() {
    this.props.dispatch(sortNewest());
  }

  sortPopular() {
    this.props.dispatch(sortPopular());
  }

  render() {
    return (
      <div>
        <PostToolBar
          newest={this.sortNewest}
          popular={this.sortPopular}
        />
        <PostList
            posts={this.props.posts}
            upVote={(id) => this.upVote(id)}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostListContainer)

