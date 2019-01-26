import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToiletBar from './ToiletParts/ToiletBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
                <ToiletBar/>
        <header className="App-header">
          <p>
            hehehe poop
          </p>
        </header>
      </div>
    );
  }
}

export default App;
