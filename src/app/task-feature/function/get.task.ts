import { inject } from '@angular/core';

import { Task } from '../model/task';
import { TaskService } from '../services/task.service';

import { Observable } from 'rxjs';

export function getTasks(): Observable<Task[]> {
    const taskService = inject(TaskService);
    return taskService.getTasks();
}
