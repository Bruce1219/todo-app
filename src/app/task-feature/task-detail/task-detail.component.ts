import { Component, inject, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

import { Task } from '../model/task'

import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent implements OnChanges{
  private taskService = inject(TaskService);

  @Input()
  id!:number;

  task?: Task;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['id']) {
      this.task = this.taskService.getTask(this.id)
    }
  }
}
