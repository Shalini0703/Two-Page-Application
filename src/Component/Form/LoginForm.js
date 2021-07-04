import React from 'react';
import Header from '../Common/Header';
import Form from './Form';
import './LoginForm.css';

function LoginForm(props) {
    return (
        <div id="loginform">
            <Header id = "headerTitle" title="Login"/>
            <Form login = {props.login} input = {props.inputUser}/>
        </div>
    )
}

export default LoginForm;
