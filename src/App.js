import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToiletBar from './ToiletParts/ToiletBar.js';
import Home from "./Pages/Home.js";
import ToiletBgd from './toiletbackground.PNG';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <ToiletBar/>
        <Home/>
          <Route path='/Home' component={Home}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
