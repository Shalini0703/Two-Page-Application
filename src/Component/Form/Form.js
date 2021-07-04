import React from 'react'
import Input from '../Common/Input';
import Button from '../Common/Button';

const Form = props => (
    <div>
      <Input description="Username" placeholder="Enter your username" type="text" input= {props.input} maxlength = "21"/>
      <Input description="Password" placeholder="Enter your password" type="password"/>
      <Button id = "button" title="Log in" click = {props.login}/>
    </div>
 );

export default Form
