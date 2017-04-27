import React, { PropTypes } from 'react';

import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

import styles from './styles.css';

const PostToolBar = ({ newest, popular }) => (
  <Toolbar className={styles.Toolbar}>
    <ToolbarTitle text="Posts" />
    <div>
      <ToolbarTitle text="Sort:" />
      <FlatButton label="Newest" onTouchTap={newest} />
      <FlatButton label="Popular" onTouchTap={popular} />
    </div>
  </Toolbar>
);

PostToolBar.prototype = {
  newest: PropTypes.func.isRequired,
  popular: PropTypes.func.isRequired
};

export default PostToolBar;
