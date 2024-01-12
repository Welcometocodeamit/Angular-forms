import { Component } from '@angular/core';
import { IeserviceService } from '../ieservice.service';

@Component({
  selector: 'app-interceptor-c',
  templateUrl: './interceptor-c.component.html',
  styleUrls: ['./interceptor-c.component.css']
})
export class InterceptorCComponent {

  constructor(private service:IeserviceService){}

  get401(){
    this.service.get401().subscribe()
  }

  get403(){
    this.service.get403().subscribe()
  }

  get404(){
    this.service.get404().subscribe()
  }

  get503(){
    this.service.get503().subscribe()
  }

}
