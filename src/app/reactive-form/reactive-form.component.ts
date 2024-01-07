import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  MyForm:FormGroup|any

  ngOnInit():void{
    this.MyForm=new FormGroup({
      'email':new FormControl('', [Validators.email, Validators.required, Validators.minLength(5)]),
      'password': new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
      )
      ])
    })

    this.MyForm.get('password').valueChanges.subscribe((value:any) => {
      console.log(value);
    });

    
  }
  

  getFormData(){
    alert(
      'email is => '+this.MyForm.value.email+
      'password is => '+this.MyForm.value.password
    )
  }

}
