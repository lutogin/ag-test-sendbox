import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloFormComponent } from './hello-form/hello-form.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { ChildOutherCompComponent } from './child-outher-comp/child-outher-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloFormComponent,
    ChildCompComponent,
    ChildOutherCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
