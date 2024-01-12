import { Component } from '@angular/core';
import { FormArray, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { pinCodeValidator } from '../Validators/pincode.validator';
import { HttpClient } from '@angular/common/http';
import { PincodeserviceService } from '../pincodeservice.service';

@Component({
  selector: 'app-reactive-form-mat',
  templateUrl: './reactive-form-mat.component.html',
  styleUrls: ['./reactive-form-mat.component.css']
})
export class ReactiveFormMatComponent {

  

  constructor(private http:HttpClient, private service:PincodeserviceService){}
  

  form:FormGroup

  post:string;
  

  ngOnInit(){
    this.form= new FormGroup({
      name:new FormControl(null, Validators.required),
      email:new FormControl(null, [Validators.required, Validators.email, Validators.minLength(7)]),
      gender:new FormControl('male'),

      location:new FormGroup({
      address: new FormControl(this.post, [Validators.required, Validators.minLength(10)]),
      postal:new FormControl(null, [Validators.required],  [pinCodeValidator.pincode(this.service)]),
      po:new FormControl(),
      country:new FormControl('India'),
      }),
  
      date:new FormControl(null),

      skills:new FormArray([
        new FormControl(null, Validators.required),
        new FormControl(null, Validators.required),
        new FormControl(null, Validators.required)
      ])
    })

    this.service.post.subscribe((data)=>{
      this.service.po=<string>data
      this.post=this.service.po
  
    })


    this.form.valueChanges.subscribe((data)=>{console.log(data)})
    this.form.statusChanges.subscribe((st)=>{console.log(st)})

    
  }


  onFormSumbit(){
    console.log(this.form)
  }

  addSkill(){
    // by default the type of get skills will be form control , form array and form group, in order to 
    // push the control inside a array we need to explicitly type cast to form array and wrap within paranthesis
    // and then we can use push method
    (<FormArray>this.form.get('skills')).push(new FormControl(null, Validators.required))

  }

  deleteSkill(){
    const arr =(<FormArray>this.form.get('skills'))
    arr.removeAt(arr.length-1)
  }

  ngDoCheck(){
    console.log('ng change called')
  }






















  // hideRequiredControl = new FormControl(false);
  // floatLabelControl = new FormControl('auto' as FloatLabelType);
  // options = this._formBuilder.group({
  //   hideRequired: this.hideRequiredControl,
  //   floatLabel: this.floatLabelControl,
  // });

  // constructor(private _formBuilder: FormBuilder) {}

  // getFloatLabelValue(): FloatLabelType {
  //   return this.floatLabelControl.value || 'auto';
  // }

}
