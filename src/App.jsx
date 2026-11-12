import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1>React Counter Application</h1>
        
        <div className="counter-display">
          <span className="count-number">{count}</span>
        </div>

        {count === 0 && <p className="warning-message">“Minimum limit reached”</p>}

        <div className="button-group">
          <button onClick={handleIncrement} className="btn increment">
            Increment
          </button>
          <button onClick={handleDecrement} className="btn decrement" disabled={count === 0}>
            Decrement
          </button>
          <button onClick={handleReset} className="btn reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;