import React, { Component } from 'react';
import Login from './Login'

import styles from './styles.css'

class LoginContainer extends Component {

    render() {
        return(
            <div className={styles.login}>
                <Login />
            </div>
        )
    }
}

export default LoginContainer;