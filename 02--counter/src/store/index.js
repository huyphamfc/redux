import { createStore } from 'redux';

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const TOGGLE = 'toggle';

const initialState = {
  counter: 0,
  showCounter: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case 'decrement':
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case 'toggle':
      return {
        counter: state.counter,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
