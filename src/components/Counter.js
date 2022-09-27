import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actionCreators";

function Counter({ count, increment, decrement }) {
  return (
    <div className="col-6">
    <div className="card text-center">
      <div className="card-header">Feature - 1</div>
      <div className="card-body">
        <h5 className="card-title">{count}</h5>
        <p className="card-text">Counter application with react redux</p>
        <button
          className="btn btn-success"
          type="btn"
          onClick={() => increment(5)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger mx-2"
          type="btn"
          onClick={() => decrement(1)}
        >
          Decrement
        </button>
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
