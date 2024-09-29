import { Component, EventEmitter, Input, Output, numberAttribute, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

import { Task } from '../model/task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit, OnChanges {
  @Input({required: true})
  task!: Task;

  @Output()
  stateChange = new EventEmitter<'None' | 'Doing' | 'Finish'>();

  contentClass!: {[key: string]: boolean};

  startDate?: Date;

  finishDate?: Date;

  ngOnInit(): void {
    console.log('Angular OnInit Life Cycle Hook');
    this.contentClass = {
      important: this.task.important,
      urgent: this.task.urgent,
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Angular OnChanges Life Cycle Hook', changes);
    if(changes['state']){
      this.setTaskDate();
    }
  }

  ngDoCheck(): void {
    this.setTaskDate();
  }

  onSetState(state: 'None' | 'Doing' | 'Finish'): void{
    this.stateChange.emit(state);
  }

  setTaskDate(): void {
    switch (this.task.state){
      case 'None':
        this.startDate = undefined;
        this.finishDate = undefined;
        break;
      case 'Doing':
        this.startDate = new Date();
        this.finishDate = undefined;
        break;
      case 'Finish':
        this.finishDate = new Date();
        break;
    }
  } 
}
