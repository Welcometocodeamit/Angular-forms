import { Component } from '@angular/core';
import { ErrorServiceService } from '../error-service.service';
import { IeserviceService } from '../Interceptors/ieservice.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  constructor(private service:ErrorServiceService, private iservice:IeserviceService){}

  error:any=null
  data:any=null



  fetchData(){
    this.service.getData().subscribe((data)=>{
      this.service.data=data
      this.data=this.service.data
    },
    (error)=>{
      this.service.error=error.message
      this.error=this.service.error}
    )
  }


  get401(){
    this.iservice.get401().subscribe((data)=>{
      console.log(data)
    },
    (err)=>{
      this.error=this.iservice.err.statusText
    })
  }

  get403(){
    this.iservice.get403().subscribe((data)=>{
    },
    (err)=>{
      this.error=this.iservice.err.statusText
    })
  }

  // get403(){
  //   this.iservice.get403().subscribe()
  // }

  get404(){
    this.iservice.get404().subscribe((data)=>{
    },
    (err)=>{
      this.error=this.iservice.err.statusText
    })
  }

  // get404(){
  //   this.iservice.get404().subscribe()
  // }

  get503(){
    this.iservice.get503().subscribe((data)=>{
    },
    (err)=>{
      this.error=this.iservice.err.statusText
    })
  }

  // get503(){
  //   this.iservice.get503().subscribe()
  // }


}
