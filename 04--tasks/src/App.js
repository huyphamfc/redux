import { Provider } from 'react-redux';

import store from './app/store';
import { TaskInput, Tasks } from './components';

function App() {
  console.log('Render: App');

  return (
    <Provider store={store}>
      <TaskInput />
      <Tasks />
    </Provider>
  );
}

export default App;
