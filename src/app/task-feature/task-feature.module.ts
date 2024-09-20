import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskFeatureRoutingModule } from './task-feature-routing.module';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    TaskFeatureRoutingModule
  ],
  exports: [
    TaskComponent
  ]
})
export class TaskFeatureModule { }
