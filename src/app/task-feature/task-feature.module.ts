import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskFeatureRoutingModule } from './task-feature-routing.module';
import { TaskComponent } from './task/task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';


@NgModule({
  declarations: [
    TaskComponent,
    TaskDetailComponent
  ],
  imports: [
    CommonModule,
    TaskFeatureRoutingModule
  ],
  exports: [
    TaskComponent,
    TaskDetailComponent
  ]
})
export class TaskFeatureModule { }
