import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  MyForm:FormGroup|any

  ngOnInit():void{
    this.MyForm=new FormGroup({
      'email':new FormControl(''),
      'password': new FormControl('')
    })
  }

  getFormData(){
    alert(
      'email is => '+this.MyForm.value.email+
      'password is => '+this.MyForm.value.password
    )
  }

}
