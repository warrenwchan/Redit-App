import React, { Component } from 'react';
import { getWeeks } from './../../redux/actions';
import { connect } from 'react-redux';
import Week from './../../components/Week';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SiteIcon from 'material-ui/svg-icons/communication/import-contacts';

import styles from './styles.css';

class Categories extends Component {

  componentDidMount() {
    this.props.dispatch(getWeeks())
  }

  render() {
    return (
      <div>
        <Drawer>
          <AppBar
            className={styles.menuHome}
            title="RED it"
            iconElementLeft={<IconButton><SiteIcon /></IconButton>}
          />
          {this.props.weeks.map((week ,i) => {
            return <Week
              week={week}
              key={i}
            />
          })}
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weeks: state.weeks
  }
}

export default connect(mapStateToProps)(Categories);
