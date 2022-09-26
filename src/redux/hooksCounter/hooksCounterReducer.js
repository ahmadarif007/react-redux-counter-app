import { HINCREMENT, HDECREMENT } from "./actionTypes";

const initialState = {
  value: 0,
};

const hooksCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case HINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };

    case HDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

export default hooksCounterReducer;
