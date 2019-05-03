import React, { Component, FormEvent } from 'react';
import './App.css';

import Logs from './components/Logs';
import ItemBox from './components/ItemBox';

interface AppState {
  itemBoxSize: number;
  itemsLabel: string;
}

export default class App extends Component<{}, AppState> {
  state = {
    itemBoxSize: 3,
    itemsLabel: 'ITEM',
  }

  onChangeSize = (event: FormEvent<HTMLInputElement>) => {
    const currentTarget = event.currentTarget;
    const value = parseInt(currentTarget.value, 10);
    if (isNaN(value)) return;
    this.setState({
      itemBoxSize: value
    });
  }

  onChangeLabel = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    this.setState({
      itemsLabel: currentTarget.value
    });
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
          onChange={this.onChangeSize}
          />
        <label htmlFor="itemsLabel">Label:</label>
        <input
          type="text"
          name="itemsLabel"
          id="itemsLabel"
          value={this.state.itemsLabel}
          onChange={this.onChangeLabel}
          />
        <ItemBox size={this.state.itemBoxSize} itemsLabel={this.state.itemsLabel} />
      </div>
      </div>
    </div>
    );
  }
}
