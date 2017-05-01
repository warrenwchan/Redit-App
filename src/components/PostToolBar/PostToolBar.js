import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

import { sortNewest, sortPopular } from '../../redux/actions';

import styles from './styles.css';

const PostToolBar = ({ post, dispatch }) => (
  <Toolbar className={styles.Toolbar}>
    <ToolbarTitle text="Posts" />
    <div>
      <ToolbarTitle text="Sort:" />
      <FlatButton label="Newest" onTouchTap={() => dispatch(sortNewest())} />
      <FlatButton label="Popular" onTouchTap={() => dispatch(sortPopular())} />
    </div>
  </Toolbar>
);

PostToolBar.prototype = {
  newest: PropTypes.func.isRequired,
  popular: PropTypes.func.isRequired
};

export default connect()(PostToolBar);
