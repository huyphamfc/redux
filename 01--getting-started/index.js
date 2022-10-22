const redux = require('redux');

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(subscriber);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
