import { useSelector, useDispatch } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/slice';

function App() {
  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increase = () => dispatch(increaseCounter());
  const decrease = () => dispatch(decreaseCounter());

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
