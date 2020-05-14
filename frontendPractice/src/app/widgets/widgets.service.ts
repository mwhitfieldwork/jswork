import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

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


  constructor(private _http: HttpClient) {}


  getProductData(): Observable<any> {
    //this._ItemUrl = "http://localhost:3500/products/"
    this._ItemUrl = "http://localhost:52431/Graphs/GetAll"

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
