import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';

import{BasictableComponent} from'./basictable.component';
import{BasicTableService} from './basictable.service';


const routes: Routes = [
    {path:'basictable',component:BasictableComponent}
  ];


@NgModule({
  declarations: [
    BasictableComponent

  ],
  providers:[
    BasicTableService,
  ],
  imports: [
    RouterModule.forRoot(routes),  
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports:[
    BasictableComponent, 
    RouterModule 
  ]
})
export class BasicTableModule { }
