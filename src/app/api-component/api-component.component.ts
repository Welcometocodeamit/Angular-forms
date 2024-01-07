import { Component } from '@angular/core';
import { ApiCallingServiceService } from '../api-calling-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-api-component',
  templateUrl: './api-component.component.html',
  styleUrls: ['./api-component.component.css']
})
export class ApiComponentComponent {

  constructor(private service:ApiCallingServiceService){
    this.service.getData().subscribe((data)=>{
      this.data=data
      console.log(data)
    })
  }
  data:any
  

  getData(form:NgForm){
    alert(
      'User id is ->'+form.value.userId+
      ' Id is ->'+form.value.id+
      ' Title is ->'+form.value.title+
      ' Body is ->'+form.value.body
    )
  }
}
