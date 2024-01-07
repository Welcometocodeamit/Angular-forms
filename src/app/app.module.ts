import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsTempComponent } from './forms-temp/forms-temp.component';
import { FormsModule, NgModel } from '@angular/forms';
import { MformComponent } from './mform/mform.component';
import { ApiComponentComponent } from './api-component/api-component.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsTempComponent,
    MformComponent,
    ApiComponentComponent,
    ReactiveFormComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
