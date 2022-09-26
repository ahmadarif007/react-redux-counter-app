import { useState } from "react";

function App() {
  const [count, setConut] = useState(0);

  const increment = () => {
    const value = count + 1;
    setConut(value);
  };

  const decrement = () => {
    const value = count - 1;
    setConut(value);
  };

  return (
    <div className="App container mt-5">
      <div className="card text-center">
        <div className="card-header">{count}</div>
        <div className="card-body">
          <h5 className="card-title">Counter Application</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button className="btn btn-success" type="btn" onClick={increment}>
            Increment
          </button>
          <button className="btn btn-danger" type="btn" onClick={decrement}>
            Decrement
          </button>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
}

export default App;
