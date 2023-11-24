import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  basicForm: FormGroup

  constructor() {
    this.basicForm = new FormGroup({
        'name': new FormControl(''),
        'number': new FormControl(0),
      })
  }

  handleSubmit(){

  }

}
