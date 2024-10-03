import { inject } from '@angular/core';

import { Task } from '../model/task';
import { TaskService } from '../services/task.service';

export function getTasks(): Task[] {
    const taskService = inject(TaskService);
    return taskService.getTasks();
}