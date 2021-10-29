import { makeAutoObservable } from 'mobx';

class TaskStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTask = (value) => {
    this.tasks = [value, ...this.tasks];
    console.log(this.tasks);
  };
}

const taskStore = new TaskStore();
export default taskStore;
