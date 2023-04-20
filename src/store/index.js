import { createStore } from "redux";

/* reducer function thas is responsable to execute action, change the store data and send it to central store */
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

/* there is just 1 store that keep the state of my aplication (this state can be simple type or object, array) */
const store = createStore(counterReducer);

export default store;
