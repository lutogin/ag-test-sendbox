import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkWithFormsComponent } from './work-with-forms.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WorkWithFormsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    WorkWithFormsComponent,
  ]
})
export class WorkWithFormsModule { }
