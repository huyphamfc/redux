import { useSelector } from 'react-redux';

function Tasks() {
  let { tasks } = useSelector(state => state.task);

  tasks = tasks.map(item => <li key={Math.random()}>{item}</li>);

  console.log('Render: Tasks');

  return <ul>{tasks}</ul>;
}

export default Tasks;
