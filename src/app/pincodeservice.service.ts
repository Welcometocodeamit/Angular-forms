import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PincodeserviceService {

  constructor(private http: HttpClient) {}

  po:string=''

  post = new Subject

  checkPincode(pincode:string){
    const url = `https://api.postalpincode.in/pincode/${pincode}`
    return this.http.get(url)
  }




}
