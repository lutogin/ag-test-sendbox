import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkWithFormsComponent } from './work-with-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkWithNgformComponent } from './work-with-ngform/work-with-ngform.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    WorkWithFormsComponent,
    WorkWithNgformComponent,
    ReactiveFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    WorkWithFormsComponent,
    WorkWithNgformComponent,
    ReactiveFormComponent,
  ]
})
export class WorkWithFormsModule { }
