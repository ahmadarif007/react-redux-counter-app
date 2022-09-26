import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "./redux/conter/actionCreators";

function Counter({ count, increment, decrement }) {
  return (
    <div className="card text-center">
      <div className="card-header">{count}</div>
      <div className="card-body">
        <h5 className="card-title">Counter Application</h5>
        <p className="card-text">This is counter application with redux</p>
        <button
          className="btn btn-success"
          type="btn"
          onClick={() => increment(3)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          type="btn"
          onClick={() => decrement(1)}
        >
          Decrement
        </button>
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
