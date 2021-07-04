import './App.css';
import LoginForm from './Component/Form/LoginForm';
import React, { Component } from 'react';
import Main from './Component/Main/Main';
import Cookies from 'universal-cookie';

class App extends Component {
  constructor(props) {
    const cookies = new Cookies();
    super(props)
  
    this.state = {
      username : cookies.get('Username') || '',
      isLoggedIn : cookies.get('isLoggedIn') || 'false'
    }
    this.loginHandler = this.loginHandler.bind(this)
    this.logutHandler = this.logutHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  loginHandler = () => {
    const cookies = new Cookies();
    cookies.remove("isLoggedIn")
    cookies.set('isLoggedIn', 'true');
    this.setState({
      isLoggedIn : cookies.get('isLoggedIn')
    })
  }

  logutHandler = () => {
    const cookies = new Cookies();
    cookies.remove("isLoggedIn");
    cookies.remove("Username");
    cookies.set('isLoggedIn', 'false');
    cookies.set('Username', '');
    this.setState({
      isLoggedIn : cookies.get('isLoggedIn'),
      username : ''
    })
  } 

  handleChange = (event) => {
    const cookies = new Cookies();
    cookies.remove("Username");
    cookies.set('Username', event.target.value);
    this.setState({
      username :cookies.get('Username')
  })
  }
  
  render() {
    let layout = '';
    if (this.state.isLoggedIn === 'true'){
      layout = <Main name = {this.state.username} logout = {this.logutHandler}/>
    } else {
      layout = <LoginForm name = {this.state.username} isLoggedIn = {this.state.isLoggedIn} login = {this.loginHandler} inputUser = {this.handleChange}/>
    }
    return (
      <div className="App">
        {layout}
      </div>
    );
  }
}

export default App

