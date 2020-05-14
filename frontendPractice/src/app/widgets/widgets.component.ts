import { Component, OnInit } from '@angular/core';
import{WidgetsService} from './widgets.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  opencombo:boolean;
  Label:string;
  projectValue:string;
  term
  opendd:boolean;

  items:any = [];
  errorMessage:any;

  constructor(private widgetService :WidgetsService) { }

  ngOnInit() {
    this.getProductData()
  }

  selectedProduct = this.items[0].Name

  getProductData(){
    this.widgetService.getProductData()
    
    .subscribe((items) => {
      this.items = items;
      //do something
    },
    error => this.errorMessage = <any>error);
  }

  selectComboData(item:any){
    if(item) {
      let data = JSON.parse(item);

      if(data) {
      }

      this.opencombo = false;
      this.opendd = false;
    }
  }

  comboOpen(data:string) {
    if( data != "") {
      this.opencombo = true;
      this.opendd = true;
    }else{
     this.opencombo = false;
     this.opendd = false;
    }
  }
}
