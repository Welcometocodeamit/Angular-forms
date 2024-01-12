import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorServiceService {

  constructor(private http: HttpClient) { }

  data:any=null
  error:any=null

  getData(){

    try{
      return this.http.get('https://fakestoreapi.com/products/1')
    }catch(error){
      console.log(error)
      return error
    }
    
  }
}
