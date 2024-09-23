import { Component, EventEmitter, Input, Output, numberAttribute, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit, OnChanges {
  @Input({ required: true, transform: numberAttribute})
  id!:number;

  @Input({required: true})
  content!:string;

  @Input({required: true})
  type!: 'Home' | 'Work' | 'Other';

  @Input({required: true})
  state!: 'None' | 'Doing' | 'Finish';
  @Output()
  stateChange = new EventEmitter<'None' | 'Doing' | 'Finish'>();

  startDate?: Date;

  finishDate?: Date;

  ngOnInit(): void {
    console.log('Angular OnInit Life Cycle Hook');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Angular OnChanges Life Cycle Hook', changes);
    if(changes['state']){
      this.setTaskDate();
    }
  }

  onSetState(state: 'None' | 'Doing' | 'Finish'): void{
    this.stateChange.emit(state);
  }

  setTaskDate(): void {
    switch (this.state){
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
