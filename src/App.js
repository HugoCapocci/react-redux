import React, { Component } from 'react';
import Logs from './Logs';
import ItemBox from './ItemBox';
import User from './User';

import './App.css';

class App extends Component {
  state = {
    itemBoxSize: 3,
    itemsLabel: 'ITEM',
  }

  onChangeInt = ({ target }) => {
    const value = parseInt(target.value, 10);
    if (isNaN(value)) return;
    this.setState({
      [target.id]: parseInt(value, 10)
    });
  }

  onChangeText = ({ target }) => {
    this.setState({
      [target.id]: target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <User />
        </header>
        <Logs />
        <div className="container">
          <div className="components">
            <label htmlFor="itemBoxSize">Nb Components:</label>
            <input
              type="number"
              name="itemBoxSize"
              id="itemBoxSize"
              value={this.state.itemBoxSize}
              onChange={this.onChangeInt}
            />
            <label htmlFor="itemsLabel">Label:</label>
            <input
              type="text"
              name="itemsLabel"
              id="itemsLabel"
              value={this.state.itemsLabel}
              onChange={this.onChangeText}
            />
            <ItemBox size={this.state.itemBoxSize} itemsLabel={this.state.itemsLabel} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
