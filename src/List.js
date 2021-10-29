import React from 'react';
import TaskStore from './TaskStore';
import { observer } from 'mobx-react-lite';

const List = () => {
  const { tasks } = TaskStore;

  return (
    <div>
      <h1>List the products ({tasks.length})</h1>
      {tasks.map((t) => {
        return <h1>{t}</h1>;
      })}
    </div>
  );
};

export default observer(List);
