import React, { PropTypes } from 'react';

import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';

import styles from './styles.css';

const Week = ({ week, i }) => (

  <List className={styles.week}>
    <Subheader>{week.title}</Subheader>
    <Divider />
      {week.categories.map((category, i) => (
        <ListItem
          primaryText={category}
          key={i}
        />
      ))}
  </List>
);

Week.propTypes = {
  weeks: PropTypes.array
};

export default Week;
