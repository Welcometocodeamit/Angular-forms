import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IeserviceService } from './ieservice.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private iservice:IeserviceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error)=>{
        if(error instanceof HttpErrorResponse){
          if(error.error instanceof ErrorEvent){
            console.log('Error event')
          }else{
            switch(error.status){
              case 401 : //Unauth
                console.log('jh')
                this.iservice.err=error
                // console.log(this.iservice.err)
                // console.log(error)
                break
              
              case 403 : //forbid
                console.log(error.statusText)
                this.iservice.err=error
                break

              case 404 : //not found
                console.log(error.statusText)
                this.iservice.err=error
                break

              case 503 : //server
                console.log(error.statusText)
                this.iservice.err=error
                break
            }
          }

        }else{
          console.log('an error occured')
        }

        return throwError(()=>{
          new Error(error.statusText)
        })
      }
    ))
  }
}
