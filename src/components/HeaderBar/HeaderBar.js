import React from 'react';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import SiteIcon from 'material-ui/svg-icons/communication/import-contacts';

import styles from './styles.css'

const buttonStyles = {
    color: "white"
};

const HeaderBar = () => (
    <AppBar className={styles.navBar}
        iconElementLeft={<IconButton><SiteIcon/></IconButton>}
        iconElementRight={<div><FlatButton style={buttonStyles} label="Share A New Link" /><FlatButton style={buttonStyles} label="Logout" /></div>}
    />
);

export default HeaderBar;