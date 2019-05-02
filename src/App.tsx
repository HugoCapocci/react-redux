import React, { Component, FormEvent } from 'react';
import './App.css';

import Logs from './components/Logs';
import ItemBox from './components/ItemBox';

class App extends Component {
  state = {
    itemBoxSize: 3,
    itemsLabel: 'ITEM',
  }

  onChangeSize = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    const value = parseInt(currentTarget.value, 10);
    if (isNaN(value)) return;
    this.setState({
      [currentTarget.id]: value
    });
  }

  onChangeLabel = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    this.setState({
      [currentTarget.id]: currentTarget.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
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

export default App;
