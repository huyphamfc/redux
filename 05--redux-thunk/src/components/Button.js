import { useDispatch } from 'react-redux';
import { fetchData } from '../store';

function Button({ children }) {
  const dispatch = useDispatch();

  const handleFetchData = () => {
    dispatch(fetchData());
  };

  return <button onClick={handleFetchData}>{children}</button>;
}

export default Button;
