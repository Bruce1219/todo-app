import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
  content = '建立代辦事項元件';
  type: 'Home' | 'Work' | 'Other' = 'Work';
  state: 'None' | 'Doing' | 'Finish' = 'None';
  totalCount = 10;
  finishCount = 3;
  onSetState(state: 'None' | 'Doing' | 'Finish'): void{
    this.state = state;
  }
}
