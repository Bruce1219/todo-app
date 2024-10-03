import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild, inject } from '@angular/core';

import { Task } from './task-feature/model/task';

import { TaskComponent } from './task-feature/task/task.component';

import { TaskService } from './task-feature/services/task.service'

import { getTasks } from './task-feature/function/get.task'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  taskService = inject(TaskService);

  userId:string =  'admin';

  tasks: Task[] = getTasks();

  selectedId?: number;

  direction: 'asc' | 'desc' = 'asc';

  @ViewChild(TaskComponent)
  viewTask!: TaskComponent;

  @ViewChild(TaskComponent, {static: true})
  staticTask!: TaskComponent;

  task_1 = new Task({
    id: 1,
    content: '建立待辦事項元件',
    type: 'Work',
    important: true,
    urgent: true,
    state: 'None',
  });

  title = 'todo-app';
  content = '建立代辦事項元件';
  type: 'Home' | 'Work' | 'Other' = 'Work';
  state: 'None' | 'Doing' | 'Finish' = 'None';
  totalCount = 10;
  finishCount = 3;

  onSetState(task: Task, state: 'None' | 'Doing' | 'Finish'): void{
    task.state = state;
  }

  ngOnInit(): void {
    // 要用右上方的 Open in New Window 功能，利用開發者工具觀察
    console.log('Angular ngOnInit Lift Cycle Hook - viewTask', this.viewTask);
    console.log(
      'Angular ngOnInit Lift Cycle Hook - staticTask',
      this.staticTask
    );
  }

  ngAfterViewInit(): void {
    console.log(
      'Angular ngAfterViewInit Lift Cycle Hook - viewTask',
      this.viewTask
    );
    console.log(
      'Angular ngAfterViewInit Lift Cycle Hook - staticTask',
      this.staticTask
    );
  }

  ngAfterViewChecked(): void {
    console.log('Angular ngAfterViewChecked Lift Cycle Hook');
  }

  trackById(index: number, task: Task): number {
    return task.id;
  }

  onReset(): void {
    this.tasks = [
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
        content: '購買 iPhone 手機 - 30000元',
        type: 'Other',
        important: false,
        urgent: false,
        state: 'None',
      }),
      new Task({
        id: 4,
        content: '待辦事項 4',
        type: 'Home',
        important: false,
        urgent: false,
        state: 'None',
      }),
      new Task({
        id: 5,
        content: '待辦事項 5',
        type: 'Home',
        important: false,
        urgent: false,
        state: 'None',
      }),
    ];
  }
}
