import { createStore } from "redux";
// import counterReducer from "./counter/counterReducer";
import HooksCounterReducer from "./hooksCounter/hooksCounterReducer";

const store = createStore(HooksCounterReducer);

export default store;
