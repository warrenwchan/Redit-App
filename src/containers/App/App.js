import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SiteIcon from 'material-ui/svg-icons/communication/import-contacts';

import PropTypes from 'prop-types';
import Categories from './../../containers/Categories';

import styles from './styles.css';

import { Provider } from 'react-redux';
import store from './../../redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.app}>
          <Drawer>
            <AppBar
              className={styles.menuHome}
              title="RED it"
              iconElementLeft={<IconButton><SiteIcon /></IconButton>}
            />
            <Categories />
          </Drawer>
          <div>
            {this.props.children}
          </div>
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
