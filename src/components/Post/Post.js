import React, { PropTypes } from 'react';

import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

import styles from './styles.css';

const Post = ({ post, i, upVote, vote }) => (
  <div>
    <Card className={styles.postContain}>
      <a href="{post.link}">
        <h3>{post.title}</h3>
      </a>
      <p>{post.description}</p>
      <div className={styles.postFooter}>
        <FlatButton onTouchTap={() => upVote(post.id)}> ▴ Vote {vote} </FlatButton>
        <Chip>{post.categories.map(postCategories => postCategories)} </Chip>
      </div>
    </Card>
  </div>
);

Post.propTypes = {
  post: PropTypes.object.isRequired,
  upVote: PropTypes.func.isRequired
};

export default Post;
