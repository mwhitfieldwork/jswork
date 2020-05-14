
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, catchError, tap, filter } from 'rxjs/operators';

import{ITableData}from './basictable';
import { Feature } from '../models/feature'


@Injectable({
  providedIn: 'root'
})
export class BasicTablesService {

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


  getFeaturedTable(): Observable<Feature[]> {
    this._ItemUrl = "http://localhost:52431/Featured/GetAll"

    let result  =  this._http.get<Feature[]>(this._ItemUrl);
    
    return result;
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }
}



