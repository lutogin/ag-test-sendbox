import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DataComponent } from './data.component';



@NgModule({
  declarations: [DataComponent],
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
