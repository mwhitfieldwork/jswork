import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidateformService {
  
  _ItemUrl:string;

  constructor(private _http: HttpClient) { }


  addProducts(productObj:any): Observable<any> {
    this._ItemUrl = "http://localhost:52431/Products/Generate"

    let response  = this._http.post(this._ItemUrl, productObj)
    .pipe(map(response => response),
  catchError(this.handleError), /*tap(response => console.dir(response))*/)
    return response;  
  }

//categoried
getCategories(): Observable<any> {
  this._ItemUrl = "http://localhost:52431/Category/GetAll"

  let response  = this._http.get(this._ItemUrl)
  .pipe(map(response => response),
catchError(this.handleError), /*tap(response => console.dir(response))*/)
  return response;  
}

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }
}
