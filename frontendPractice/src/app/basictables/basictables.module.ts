import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';

import{BasictablesComponent} from'./basictable.component';
import{BasicTablesService} from './basictable.service';


const routes: Routes = [
    {path:'basictables',component:BasictablesComponent}
  ];


@NgModule({
  declarations: [
    BasictablesComponent

  ],
  providers:[
    BasicTablesService,
  ],
  imports: [
    RouterModule.forRoot(routes),  
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports:[
    BasictablesComponent, 
    RouterModule 
  ]
})
export class BasicTablesModule { }
