import { InjectionToken } from '@angular/core';

import { Task } from '../model/task';
import { Observable } from 'rxjs';

export const TaskServiceToken = new InjectionToken<ITaskService>(
    'Task Service'
);

export interface ITaskService {
    getTask(id: number): Observable<Task>;

    getRowData(): Observable<string>;

    getTasks(): Observable<Task[]>;

    setState(id: number, state: 'None' | 'Doing' | 'Finish'): void;
}
