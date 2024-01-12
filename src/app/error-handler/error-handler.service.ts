import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {


    

    if (error instanceof HttpErrorResponse) {
      // Handle HTTP errors (e.g., server errors)
      // loggingService.logError(`HTTP Error: ${error.message}`);
      // notificationService.showError(`HTTP Error: ${error.message}`);
      // alert(`HTTP Error: ${error.message}`)
    } else if (error instanceof Error) {
      // Handle other types of errors
      // loggingService.logError(`Error: ${error.message}`);
      // notificationService.showError(`Error: ${error.message}`);
      alert(`Error: ${error.message}`)
    } else {
      // Handle other unexpected errors
      // loggingService.logError('An unexpected error occurred');
      // notificationService.showError('An unexpected error occurred');
      alert(`An unexpected error occured`)
    }

    // throw error;
  }
  }

