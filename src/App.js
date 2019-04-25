import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Screen1 from './exercise/components/screen1';
import Screen2 from './exercise/components/screen2';

class App extends Component {
  render() {
    return (
      <div className="ontainer">
        <div className="row">
          <Screen1/>
          <Screen2/>
        </div>
      </div>
    );
  }
}

export default App;
