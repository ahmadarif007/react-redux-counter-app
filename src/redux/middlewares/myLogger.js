import rootReducer from "../rootReducer";

const myLogger = (store) => (next) => (action) => {
  console.log(`Dispatch action: ${JSON.stringify(action)}`);
  console.log(`Before state: ${JSON.stringify(store.getState())}`);

  // upcomming state
  const upcommingState = [action].reduce(rootReducer, store.getState());
  console.log(`Upcomming state: ${JSON.stringify(upcommingState)}`);

  // pass function
  return next(action);
};

export default myLogger;
