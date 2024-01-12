import { HttpClient } from "@angular/common/http";
import { AsyncValidatorFn, FormControl, ValidationErrors } from "@angular/forms";
import { Observable, catchError, map, of } from "rxjs";
import { PincodeserviceService } from "../pincodeservice.service";

export class pinCodeValidator{

    constructor(private http: HttpClient) {}


   
    

    static pincode(service: PincodeserviceService): AsyncValidatorFn {
        return (control: FormControl): Observable<ValidationErrors | null> => {
          const pin = control.value;
    
          if (!pin) {
            return of(null); 
          }
    
          return service.checkPincode(control.value).pipe(
            map((data: any) => {
                console.log(data)
                console.log(data[0].Status)
                
              if (data[0].Status === 'Error') {
                console.log('pincode:true')
                return { pincode: 'Pin not found' };
              }

              service.post.next(data[0].PostOffice[0].Name)
       
            //   service.post=data[0].PostOffice[0].Name
            //   console.log(data[0].PostOffice[0].Name)
            console.log(service.post)

              console.log('Valid pincode');
              return null;
            }),
            catchError(() => of({ pincode: true })) 
          );
        };
      }

        
}


