import { useSelector, useDispatch } from 'react-redux';

import * as action from '../../store';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch();

  const increaseCounter = () => {
    dispatch({ type: action.INCREMENT });
  };

  const decreaseCounter = () => {
    dispatch({ type: action.DECREMENT });
  };

  const toggleCounter = () => {
    dispatch({ type: action.TOGGLE });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increaseCounter}>Increment</button>
        <button onClick={decreaseCounter}>Decrement</button>
      </div>
      <button onClick={toggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
