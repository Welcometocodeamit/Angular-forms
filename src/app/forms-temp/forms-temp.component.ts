
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-forms-temp',
  templateUrl: './forms-temp.component.html',
  styleUrls: ['./forms-temp.component.css']
})
export class FormsTempComponent {

  getFormData( form : NgForm){
    alert('form is submitted, email is '+ form.value.email+" password is "+form.value.password )
  }

}
