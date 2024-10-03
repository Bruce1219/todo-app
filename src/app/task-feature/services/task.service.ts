import { Injectable } from '@angular/core';

import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = [
    new Task({
      id: 1,
      content: '建立待辦事項元件',
      type: 'Work',
      important: true,
      urgent: true,
      state: 'None',
    }),
    new Task({
      id: 2,
      content: '購買 iPhone 手機',
      type: 'Other',
      important: false,
      urgent: false,
      money: 30000,
      state: 'Finish',
      startDate: new Date(2023, 3, 1),
      finishDate: new Date(2023, 3, 1),
    }),
    new Task({
      id: 3,
      content: '家庭聚餐',
      type: 'Home',
      important: true,
      urgent: false,
      state: 'None',
    }),
  ];

  getTask(id: number): Task {
    return this.tasks.find((task) => task.id === id)!;
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  setState(id: number, state: 'None' | 'Doing' | 'Finish'): void {
    const task = this.tasks.find((task) => task.id === id)!;
    task.state = state;
    this.setTaskDate(task);
  }

  private setTaskDate(task: Task): void {
    switch (task.state) {
      case 'None':
        task.startDate = undefined;
        task.finishDate = undefined;
        break;
      case 'Doing':
        task.startDate = new Date();
        task.finishDate = undefined;
        break;
      case 'Finish':
        task.finishDate = new Date();
        break;
    }
  }
}
