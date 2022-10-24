import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { inputTask, addTask } from '../features/';

function TaskInput() {
  const inputRef = useRef();

  const { content } = useSelector(state => state.input);
  const dispatch = useDispatch();

  const handleInputTask = e => {
    dispatch(inputTask(e.target.value));
  };

  const handleAddTask = e => {
    e.preventDefault();
    if (!content) return;

    dispatch(addTask(content));

    inputRef.current.value = '';
    inputRef.current.focus();
  };

  console.log('Render: Task Input');

  return (
    <form onSubmit={e => handleAddTask(e)}>
      <input
        ref={inputRef}
        value={content}
        onChange={e => handleInputTask(e)}
      />
      <button>Add</button>
    </form>
  );
}

export default TaskInput;
