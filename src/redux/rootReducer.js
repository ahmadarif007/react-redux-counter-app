import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import HooksCounterReducer from "./hooksCounter/hooksCounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  hooksCounter: HooksCounterReducer,
});

export default rootReducer;
