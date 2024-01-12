import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsTempComponent } from './forms-temp/forms-temp.component';
import { FormsModule, NgModel } from '@angular/forms';
import { MformComponent } from './mform/mform.component';
import { ApiComponentComponent } from './api-component/api-component.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form.component';
import { TdfMatComponent } from './tdf-mat/tdf-mat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormMatComponent } from './reactive-form-mat/reactive-form-mat.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ErrorComponent } from './error/error.component';
import { ErrServiceComponent } from './err-service/err-service.component';
import { ErrorInterceptor } from './Interceptors/error.interceptor';
import { InterceptorCComponent } from './Interceptors/interceptor-c/interceptor-c.component';
import { ErrorHandlerComponent } from './error-handler/error-handler/error-handler.component';
import { ErrorHandlerService } from './error-handler/error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    FormsTempComponent,
    MformComponent,
    ApiComponentComponent,
    ReactiveFormComponent,
    TaskFormComponent,
    TdfMatComponent,
    ReactiveFormMatComponent,
    FormBuilderComponent,
    ErrorComponent,
    ErrServiceComponent,
    InterceptorCComponent,
    ErrorHandlerComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule ,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },

    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
