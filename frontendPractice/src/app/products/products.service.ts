import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Product } from '../models/products';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  _ItemUrl: string;
  onProductsChanged: BehaviorSubject<any>;
  routeParams:any;
  productList:Product[] = [];

  constructor(private _http: HttpClient) {
    this.onProductsChanged = new BehaviorSubject([])
   }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
{
    this.routeParams = route.params;

    return new Promise((resolve, reject) => {
        Promise.all([
            this.getProducts()
        ]).then(
            () => {
                resolve();
            },
            reject
        );
    });
}

getProducts(): Promise<Product[]> {
  this._ItemUrl = "http://localhost:52431/Products/GetAll"

  return new Promise((resolve, reject) => {
    this._http.get(this._ItemUrl)
        .subscribe((response: any) => {
            this.productList = response;
            this.onProductsChanged.next(this.productList);
            resolve(this.productList);
        }, reject);
  });
}

createProduct(data:Product):Observable<Product>{
  this._ItemUrl = `http://localhost:52431/Products/Create`;
  return this._http.post<Product>(this._ItemUrl, data)
}

}
