import React, { Component } from 'react'
import Header from '../Common/Header';
import MainNav from './MainNav';
import MainView from './MainView';

class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             urViewOne : '',
             urlViewTwo : ''
        }
        this.urlViewOneHandler = this.urlViewOneHandler.bind(this)
        this.urlViewTwoHandler = this.urlViewTwoHandler.bind(this)
    }

    urlViewOneHandler = (e) => {
        this.setState({
            urlViewOne : e.target.value
        })
    }

    urlViewTwoHandler = (e) => {
        this.setState({
            urlViewTwo : e.target.value
        })
    }
    
    render() {
        return (
            <div id = "main">
                <Header id="mainHeader" title="Main"/>
                <MainNav name = {this.props.name} logout = {this.props.logout}
                 inputUrlViewOne = {this.urlViewOneHandler} inputUrlViewTwo = {this.urlViewTwoHandler}/>
                <MainView urlViewOne = {this.state.urlViewOne} urlViewTwo = {this.state.urlViewTwo}/>
            </div>
        )
    }
}

export default Main
