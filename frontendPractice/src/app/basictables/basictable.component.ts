import { Component, OnInit } from '@angular/core';

//import{Cart} from '../cartClass/cart.model'

import{ITableData} from './basictable';
import{BasicTablesService} from './basictable.service';
import { Feature } from '../models/feature';

@Component({
  selector: 'app-basictable',
  templateUrl: './basictable.component.html',
  styleUrls: ['./basictable.component.css']
})
export class BasictablesComponent implements OnInit {
  tableData:Feature[];
  errorMessage:any;
  roleList: any = [];
  roleListNonObject: any = [];


  constructor(private _basictableService:BasicTablesService ) { }

  ngOnInit() {
    this.getProductData();
    this.roleListNonObject = ["webdeveloper","sr. webdeveloper","extra sr. webdeveloper"];
    this.roleList = [{id:0, role:"jr webdeveloper"},{id:0, role:"webdeveloper"},{id:0, role:"sr webdeveloper"}]

    //let cartResult = this.cart.addLine(2,3);
  }

  getProductData(){
    this._basictableService.getFeaturedTable()
    
    .subscribe(
      (items:Feature[]) =>  this.tableData = items,
       error => this.errorMessage = <any>error
      );
  }


}
