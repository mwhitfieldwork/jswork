import { Component, OnInit } from '@angular/core';
import {GraphService} from './productgraph.service';
import{IProduct} from './product';

@Component({
  selector: 'app-productgraph',
  templateUrl: './productgraph.component.html',
  styleUrls: ['./productgraph.component.css']
})
export class ProductgraphComponent implements OnInit {
  
  productData:IProduct[];
  errorMessage:any;
  
  constructor(private _graphService:GraphService) { }

  ngOnInit() {
  this.getProductData();
  }

  getProductData(){
    this._graphService.getProductGraph()
    
    .subscribe((items) => {
      this.productData = items;
      //do something
    },
    error => this.errorMessage = <any>error);
  }


}
