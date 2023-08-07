import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Weather from './Weather';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <br />
        <Navbar title="Weather App"></Navbar>
        <br />
        <Weather></Weather>
      </div>
    )
  }
}

export default App;
