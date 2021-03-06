import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import home from './components/home';
import Landing from './components/landing';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/home' component={home}/>
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
