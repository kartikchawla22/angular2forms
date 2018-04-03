import { Component } from '@angular/core';
import {  ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent  {
reactiveForm : FormGroup;
default : string = "kartik";
Names = ["kartik", "chawla"];
  constructor(public fb : FormBuilder) {
  	this.reactiveForm = this.fb.group({
  		username : ['', Validators.required],
      password : ['', Validators.required],
      testNames : [null]
    });
    this.reactiveForm.controls['testNames'].setValue(this.default)
   }
submitReactiveForm()
{
	console.log(this.reactiveForm.value);
}

}
