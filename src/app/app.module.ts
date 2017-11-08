import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';

const routes : Routes = [
{
  path : 'reactive', component : ReactiveformComponent},
{
  path : 'template' , component : TemplatedrivenformComponent
}

]

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    TemplatedrivenformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
