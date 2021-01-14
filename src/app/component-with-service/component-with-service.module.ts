import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentWithServiceComponent } from './component-with-service.component';
import { LogService } from './log.service';


@NgModule({
  declarations: [
    ComponentWithServiceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
  ],
  exports: [
    ComponentWithServiceComponent,
  ],
  providers: [
    LogService,
  ]
})
export class ComponentWithServiceModule { }
