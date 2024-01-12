import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {

  constructor(private _formBuilder:FormBuilder){}

  form:FormGroup

  ngOnInit(){
    this.form=this._formBuilder.group({

      name:['amit', [Validators.required]],
      email:[''],
      password:['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      gender:['']

    })
  }

  

  onFormSumbit(){
    console.log(this.form.value)
  }



}
