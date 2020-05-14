import { Component, OnInit } from '@angular/core';

import{IProduct} from './product';
import{ValidateformService} from  './validateform.service';
import { ICategory } from './category';


@Component({
  selector: 'app-validateform',
  templateUrl: './validateform.component.html',
  styleUrls: ['./validateform.component.css']
})
export class ValidateformComponent implements OnInit {
  
  roleListNonObject:any=[];
  roleList:any=[];
  formList: any = [];
  formObj:any;
  product:IProduct;
  categories:ICategory[];
  errorMessage:any;

  constructor(private validateService:ValidateformService) { }

  ngOnInit() {
    this.roleListNonObject = ["webdeveloper","sr. webdeveloper","extra sr. webdeveloper"];
    this.roleList = [{id:0, role:"jr webdeveloper"},{id:0, role:"webdeveloper"},{id:0, role:"sr webdeveloper"}];
    this.formList = [{id:1, name:"web developer", cat:"web", price:31},{id:2, name:"sr web developer", cat:"web", price:36},{id:3, name:" jrweb developer", cat:"web", price:24},{id:4, name:"mid web developer", cat:"web", price:30}]
    this.formObj  = {id:0, name:"", cat:"", price:null}
    this.product = {
      Name:"",
      ImageUrl:"",
      Summary:"",
      Latitude:0,
      Longitude:0,
      Price:0,
      Marker:"",
      CategoryId:0
    }

    this.getCategories();
  }

  getSelectData(role:any) {
    let i = JSON.parse(role)
  }

  getSelectDataNonObj(role:any) {
    let i = role
  }

  testObj(){
    console.dir(this.formObj)
  }


  submitData() {
    console.dir(this.product)
    this.validateService.addProducts(this.product)
    .subscribe((items) => {
     
      this.product = items; 
    },
    error => this.errorMessage = <any>error);    
  }

  getCategories(){
    this.validateService.getCategories()
    .subscribe((items) => {
      this.categories = items; 
    },
    error => this.errorMessage = <any>error);
  }

  
  getValidationMessages(state: any, thingName?: string) {
      let thing: string = state.path || thingName;
      let messages: string[] = [];
      if (state.errors) {
        for (let errorName in state.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${thing}`);
            break;
          case "minlength":
            messages.push(`A ${thing} must be at least
            ${state.errors['minlength'].requiredLength}
            characters`);
            break;
          case "pattern":
            messages.push(`The ${thing} contains
            illegal characters`);
            break;
          }
        }
      }
      return messages;
    }
}
