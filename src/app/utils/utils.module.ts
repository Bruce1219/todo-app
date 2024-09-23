import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { PageContainerComponent } from './page-container/page-container.component';


@NgModule({
  declarations: [
    PageContainerComponent
  ],
  imports: [
    CommonModule,
    UtilsRoutingModule
  ],
  exports: [
    PageContainerComponent
  ]
})
export class UtilsModule { }
