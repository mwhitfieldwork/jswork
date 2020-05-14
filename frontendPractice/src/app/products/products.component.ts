import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products'
import { ProductsService } from './products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: Product[] = [];

  constructor(private _productsService: ProductsService) { }

  ngOnInit() {
    this._productsService.onProductsChanged
    .subscribe(featureds => {
        this.products = featureds;
    });
  }

  createProduct(){
    let prod = {
    CatagoryName: "Church",
    CategoryId: 1, // make this populate from dropdown
    Id: 1,
    ImageUrl: "/Images/church100.jpg",
    Latitude: 100,
    Longitude: 100,
    Marker: "",
    Name: "St. Mikes",
    Price: 1499.99,
    Summary: "test"
    }

    this._productsService.createProduct(prod)
    .subscribe(
      (product) => this.products.push(product),
    )
  }

}
