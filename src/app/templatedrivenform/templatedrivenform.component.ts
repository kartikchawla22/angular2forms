import { Component } from '@angular/core';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent {

  constructor() { }
templateDrivenForm : Object = {
	username : "",
	passowrd : ""
}
  
  onSubmitTemplateDriveForm(){
  	console.log(this.templateDrivenForm);
  }
}
