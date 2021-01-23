import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentWithServiceModule } from './component-with-service/component-with-service.module';
import { DataModule } from './data/data.module';
import { HelloFormComponent } from './hello-form/hello-form.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { ChildOutherCompComponent } from './child-outher-comp/child-outher-comp.component';
import { StructuresDirectiveComponent } from './structures-directive/structures-directive.component';
import { BoldDirective2 } from './structures-directive/bold.directive';
import { WhileDirective } from './structures-directive/while.directive';
import { WorkWithFormsModule } from './work-with-forms/work-with-forms.module';
import { InteractionModule } from './interaction/interaction.module';
import {RouterModule, Routes} from '@angular/router';
import {DataComponent} from './data/data.component';
import {WorkWithFormsComponent} from './work-with-forms/work-with-forms.component';
import {ComponentWithServiceComponent} from './component-with-service/component-with-service.component';
import {WorkWithNgformComponent} from './work-with-forms/work-with-ngform/work-with-ngform.component';
import {ReactiveFormComponent} from './work-with-forms/reactive-form/reactive-form.component';
import {HttpRequestComponent} from './interaction/http-request/http-request.component';
import { TestRouteParamComponent } from './test-route-param/test-route-param.component';

const appRoutes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'hello', component: HelloFormComponent },
  { path: 'data', component: DataComponent },
  { path: 'structures', component: StructuresDirectiveComponent },
  { path: 'component-with-service', component: ComponentWithServiceComponent },
  { path: 'forms', component: WorkWithFormsComponent },
  { path: 'forms-ng', component: WorkWithNgformComponent },
  { path: 'reactive-forms', component: ReactiveFormComponent },
  { path: 'http-req', component: HttpRequestComponent },
  { path: 'item/:id', component: TestRouteParamComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    HelloFormComponent,
    ChildCompComponent,
    ChildOutherCompComponent,
    StructuresDirectiveComponent,
    BoldDirective2,
    WhileDirective,
    TestRouteParamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataModule,
    ComponentWithServiceModule,
    WorkWithFormsModule,
    InteractionModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
