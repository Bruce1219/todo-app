import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // content = '建立代辦事項元件';
  @Input() content!: string;

  // state: 'None' | 'Doing' | 'Finish' = 'None';
  @Input() state!: 'None' | 'Doing' | 'Finish';
  // onSetState(state: 'None' | 'Doing' | 'Finish'): void{
  //   this.state = state;
  // }
  @Output() stateChange = new EventEmitter<'None' | 'Doing' | 'Finish'>();
  onSetState(state: 'None' | 'Doing' | 'Finish'): void{
    this.stateChange.emit(state);
  }
  
  // type: 'Home' | 'Work' | 'Other' = 'Work';
  @Input() type!: 'Home' | 'Work' | 'Other';

  fontSize = 14;
  color = 'red';
  className = 'work';

  private _id!: number;  

  @Input()
  set id(id: string) {
    this._id = +id;
  }

  get id(): string{
    return this._id.toString();
  }


}
