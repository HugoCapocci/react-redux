import React, { Component } from 'react';
import './App.css';

import Logs from './components/Logs';
import ItemBox from './components/ItemBox';
import { number } from 'prop-types';

interface AppState {
  itemBoxSize: number;
  itemsLabel: string;
}

export default class App extends Component<{}, AppState> {
  state = {
    itemBoxSize: 3,
    itemsLabel: 'ITEM',
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Logs lines={[]} />
      <div className="container">
      <div className="components">
        <label htmlFor="itemBoxSize">Nb Components:</label>
        <input
          type="number"
          name="itemBoxSize"
          id="itemBoxSize"
          value={this.state.itemBoxSize}
          />
        <label htmlFor="itemsLabel">Label:</label>
        <input
          type="text"
          name="itemsLabel"
          id="itemsLabel"
          value={this.state.itemsLabel}
          />
        <ItemBox size={this.state.itemBoxSize} itemsLabel={this.state.itemsLabel} />
      </div>
      </div>
    </div>
    );
  }
}
