import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mform',
  templateUrl: './mform.component.html',
  styleUrls: ['./mform.component.css']
})
export class MformComponent {

  getForm(form:NgForm){
    alert(
      'Hello '+form.value.name
    )
  }

}
