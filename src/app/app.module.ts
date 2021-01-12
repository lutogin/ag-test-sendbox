import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataModule } from './data/data.module';
import { HelloFormComponent } from './hello-form/hello-form.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { ChildOutherCompComponent } from './child-outher-comp/child-outher-comp.component';
import { StructuresDirectiveComponent } from './structures-directive/structures-directive.component';
import {BoldDirective2} from './structures-directive/bold.directive';
import {WhileDirective} from './structures-directive/while.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloFormComponent,
    ChildCompComponent,
    ChildOutherCompComponent,
    StructuresDirectiveComponent,
    BoldDirective2,
    WhileDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
