import { Inject,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { ITaskService } from '../interface/task.interface';
import { Task } from '../model/task';

  

@Injectable({
  providedIn: 'root'
})
export class TaskJsonService implements ITaskService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getRowData(): Observable<string> {
    return this.httpClient.get(this.url, {responseType: 'text'})
  }

  getTask(id: number): Observable<Task> {
    throw new Error('Method not implemented.');
  }
  
  private readonly url = '/assets/tasks.json';

  gatTask(id: number): Observable<Task[]> {
    return this.getTasks().pipe(
      map((tasks) => tasks.map((task) => new Task(task)))
    )
  }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.url);
  }

  setState(id: number, state: 'None' | 'Doing' | 'Finish'): void {
    throw new Error('Method not implemented.')
  }

}
