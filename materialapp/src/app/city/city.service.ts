
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  _ItemUrl: string;
  form: any;
  user: any;
  password: any;
  errorMessage: string;
  loginFailed: boolean;
  userName:any;
  person :any;
  role:any;
  personId:any;


  constructor(private _http: HttpClient) {
 }


  getProduct(): Observable<any> {
    //this._ItemUrl = "http://localhost:3500/products/";
    //this._ItemUrl = "htgettp://localhost:52431/Products/GetAll";
    this._ItemUrl = "api/products";

    let response  = this._http.get(this._ItemUrl)
    .pipe(map(response => response),
     catchError(this.handleError), 
     tap(response => console.dir(response)))

    return response;
    
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }
}




// import { Injectable } from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { Observable} from 'rxjs';
// import { of } from 'rxjs';
// import { map, catchError, tap } from 'rxjs/operators';

// import {IProduct} from './product';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

// @Injectable({
//   providedIn: 'root'
// })
// export class CityService {
//   _ItemUrl:string;

//   constructor(private _http: HttpClient) {}

//   getProduct(): Observable<any> {
//     this._ItemUrl = "http://localhost:52431/Products/GetAll"

//     let response  = this._http.get(this._ItemUrl)
//     .pipe(map(response => response),
//   catchError(this.handleError), /*tap(response => console.dir(response))*/)

//     return response;
    
//   }

//   private handleError(error: Response) {
//     console.error(error);
//     return Observable.throw(error || 'Server error');
// }

// }
