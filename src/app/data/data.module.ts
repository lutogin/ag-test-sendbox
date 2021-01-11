import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BoldWithParamsDirective } from './bold-with-params.directive';
import { BoldDirective } from './bold.directive';
import { DataComponent } from './data.component';
import { HostBindingDirective } from './host-binding.directive';
import { HostListenerDirective } from './host-listener.directive';



@NgModule({
  declarations: [
    DataComponent,
    BoldDirective,
    HostListenerDirective,
    HostBindingDirective,
    BoldWithParamsDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  exports: [
    DataComponent,
  ]
})
export class DataModule { }
