import { INCREMENT, DECREMENT } from "./actionTypes";
import initialState from "./initialState";

const staticCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};

export default staticCounterReducer;
