import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallingServiceService {

  constructor(private http:HttpClient) { }

  data:any

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
