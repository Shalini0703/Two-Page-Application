import React from 'react';
import Input from '../Common/Input';
import Button from '../Common/Button';
import './Main.css';

function MainNav(props) {
    return (
        <div id = "mainNav">
            <label>Name : {props.name}</label>
            <Input type = "url" input = {props.inputUrlViewOne} placeholder = "View1 URL"/>
            <Input type = "url" input = {props.inputUrlViewTwo} placeholder = "View2 URL"/>
            <Button id = 'logoutBtn' click = {props.logout} title = "Logout"/>
        </div>
    )
}

export default MainNav
