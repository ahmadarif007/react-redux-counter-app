import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import hooksCounterReducer from "./hooksCounter/hooksCounterReducer";
import staticCounterReducer from "./staticCounter/staticCounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  hooksCounter: hooksCounterReducer,
  staticCounter: staticCounterReducer,
});

export default rootReducer;
