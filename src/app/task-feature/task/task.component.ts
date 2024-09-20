import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // content = '建立代辦事項元件';
  @Input() content!: string;

  // state: 'None' | 'Doing' | 'Finish' = 'None';
  @Input() state!: 'None' | 'Doing' | 'Other';
  onSetState(state: 'None' | 'Doing' | 'Finish'): void{
    this.state = state;
  }
  
  // type: 'Home' | 'Work' | 'Other' = 'Work';
  @Input() type!: 'Home' | 'Work' | 'Other';
  fontSize = 14;
  color = 'red';

  className = 'work';

}
