import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  MyForm:FormGroup|any
  password?:any 
  cpassword?:any 
  match:boolean=true

  ngOnInit(){
    this.MyForm=new FormGroup({
      'email':new FormControl('', [Validators.required, Validators.email]),
      'password':new FormControl('', Validators.required),
      'cpassword':new FormControl('', Validators.required)
    })

    this.MyForm.get('password').valueChanges.subscribe((value:any) => {
      console.log(value);
    });

    this.MyForm.get('cpassword').valueChanges.subscribe((value:any) => {
      if(this.MyForm.value.password===value){
        this.match=false
      }else{
        this.match=true
      }
      console.log(this.match)
    });

  }

  getFormData(){

    if(this.MyForm.value.password===this.MyForm.value.cpassword){
      this.match=false
      alert(
        'email is => '+this.MyForm.value.email+
        'password is => '+ this.MyForm.value.password
      )
    }else{
      this.match=true
    }
    
    
  }

}
