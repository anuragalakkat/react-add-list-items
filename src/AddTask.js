import React, { useState } from 'react';
import TaskStore from './TaskStore';
import { observer } from 'mobx-react-lite';

const AddTask = observer(() => {
  const [task, setTask] = useState('');

  const { addTask } = TaskStore;

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    addTask(task);
  };

  return (
    <div>
      <h1>Add tasks</h1>
      <input onChange={handleChange}></input>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
});

export default AddTask;
