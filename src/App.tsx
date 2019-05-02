import React, { Component } from 'react';
import Logs from './components/Logs';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Logs lines={[]} />
      </div>
    );
  }
}
