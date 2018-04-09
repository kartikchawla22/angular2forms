import { Component } from '@angular/core';
import {  ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent  {
  listArr = ['one','two'];
  // listArr = new FormArray([
  //     new FormControl('one'),
  //     new FormControl('two')
      
  // ])
reactiveForm : FormGroup;
default : string = "kartik";
Names = ["kartik", "chawla"];
  constructor(public fb : FormBuilder) {
  	this.reactiveForm = this.fb.group({
  		username : ['', Validators.required],
      password : ['', Validators.required],
      testNames : [null],
      list : this.buildList()
    });
    this.reactiveForm.controls['testNames'].setValue(this.default)
    // this.reactiveForm.controls['list'].setValue(this.listArr[0])
   }
   buildList(){
     const arr = this.listArr.map(s=>{
       return this.fb.control(s);
     })
     return this.fb.array(arr)
   }
submitReactiveForm(event)
{
  const formArray: FormArray = this.reactiveForm.get('list') as FormArray;  
  let i: number = 0;  
  Object.values(event.target).forEach(elemt=>{
    if(elemt.type == 'checkbox'){
      if(elemt.checked){
        if(formArray.controls.length>0){
          formArray.controls.forEach((ctrl: FormControl) => {
            if(ctrl.value == elemt.value) {
              formArray.removeAt(i);
              return;
            }
            i++;
          });
        }
        formArray.push(new FormControl(elemt.value));
      }else{
        i = 0;
            formArray.controls.forEach((ctrl: FormControl) => {
              if(ctrl.value == elemt.value) {
                formArray.removeAt(i);
                return;
              }
              i++;
            });
      }
    }
  })
	console.log(this.reactiveForm.value);
}

}
