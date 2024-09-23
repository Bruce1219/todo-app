import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskFeatureModule } from './task-feature/task-feature.module';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskFeatureModule,
    UtilsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
