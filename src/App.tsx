import React from 'react';
import './App.css';

import Logs from './components/Logs';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Logs lines={[]} />
    </div>
  );
}

export default App;
