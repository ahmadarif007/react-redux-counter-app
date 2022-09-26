import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  hooksIncrement,
  hooksDecrement,
} from "../redux/hooksCounter/actionCreators";

function HooksCounter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const hooksIncrementHandler = (value) => {
    dispatch(hooksIncrement(value));
  };

  const hooksDecrementHandler = (value) => {
    dispatch(hooksDecrement(value));
  };

  return (
    <div className="card text-center mt-5">
      <div className="card-header">Task - 2</div>
      <div className="card-body">
        <h5 className="card-title">{count}</h5>
        <p className="card-text">Counter application with redux hooks</p>
        <button
          className="btn btn-success mx-2"
          type="btn"
          onClick={() => hooksIncrementHandler(3)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          type="btn"
          onClick={() => hooksDecrementHandler(1)}
        >
          Decrement
        </button>
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  );
}

export default HooksCounter;
