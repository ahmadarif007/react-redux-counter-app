import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../redux/staticCounter/actionCreators";

function StaticCounter({ count, increment, decrement }) {
  return (
    <div className="col-6">
    <div className="card text-center my-5">
      <div className="card-header">Feature - 3</div>
      <div className="card-body">
        <h5 className="card-title">{count}</h5>
        <p className="card-text">Static Counter application with react redux</p>
        <button className="btn btn-success mx-2" type="btn" onClick={increment}>
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

const mapStateToProps = (state) => {
  return {
    count: state.staticCounter.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StaticCounter);
