import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpRequestComponent } from './http-request/http-request.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HttpRequestComponent,
  ],
  exports: [
    HttpRequestComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class InteractionModule { }
