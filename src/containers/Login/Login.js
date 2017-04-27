import React, { Component } from 'react';

import {Toolbar} from 'material-ui/Toolbar';
import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import styles from './styles.css'

const LoginHeader = () => (
    <Toolbar className={styles.loginTitle}>
        <h3>Login</h3>
    </Toolbar>
);

const UserInput = () => (
    <div className={styles.userInput}>
        <TextField
            floatingLabelText="Email"
            fullWidth={true}
        />
        <TextField
            floatingLabelText="Password"
            fullWidth={true}
        />
    </div>
);

const UserSubmit = () => (
    <div>
        <RaisedButton 
            label="Login" 
            backgroundColor="rgb(183, 28, 28)"
        />
        <FlatButton label="Sign up" />
    </div>
);


class Login extends Component {

    render() {
        return(
            <form>
                <Card className={styles.loginContainer} >
                    <LoginHeader />
                    <div className={styles.userBody}>
                        <UserInput />
                        <UserSubmit />
                    </div>
                </Card>
            </form>
        )
    }
}

export default Login;