import { Provider } from 'react-redux';

import { Button, Posts } from './components';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Button>Fetch Data</Button>
      <Posts />
    </Provider>
  );
}

export default App;
