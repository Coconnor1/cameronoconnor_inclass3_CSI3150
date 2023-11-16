import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="counter">
          <div className="count-display">{count}</div>
          <div>
            <button className="count-button decrement" onClick={decrement}>-</button>
            <button className="count-button increment" onClick={increment}>+</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
