import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FormDataModel} from "../../model/form-data.model";
import {FormService} from "../../service/form.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  basicForm: FormGroup

  constructor(private formService: FormService) {
    this.basicForm = new FormGroup({
      'name': new FormControl(''),
      'number': new FormControl(0),
    })
  }

  handleSubmit() {
    const data: FormDataModel = this.basicForm.value;
    this.formService.sendFormData(data).subscribe(
      {
        next: (value) => console.log("Form has been successfully saved"),
        error:(err)=> console.log(err),
        complete:()=>console.log("Completion branch has run")
      }
    )
  }

}
