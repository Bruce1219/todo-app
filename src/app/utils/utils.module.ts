import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { PageContainerComponent } from './page-container/page-container.component';
import { OrderByPipe } from './pipe/order-by.pipe';


@NgModule({
  declarations: [
    PageContainerComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    UtilsRoutingModule
  ],
  exports: [
    PageContainerComponent,
    OrderByPipe
  ]
})
export class UtilsModule { }
