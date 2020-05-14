
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

import{ITableData}from './basictable';
import { Feature } from '../models/feature';

@Injectable({
  providedIn: 'root'
})
export class BasicTableService {

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
    return this._http.get<Feature[]>(this._ItemUrl);
  }

  createFeaturedProduct(newFeature:Feature):Observable<Feature>{
    this._ItemUrl = "http://localhost:52431/Featured/";
    return this._http.post<Feature>(this._ItemUrl, newFeature,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  updateFeaturedProduct(updateFeature:Feature):Observable<void>{
    this._ItemUrl = "http://localhost:52431/Featured/";
    return this._http.put<void>(this._ItemUrl+updateFeature.Id , updateFeature, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  deleteFeature(featureID:number):Observable<void>{
    this._ItemUrl = "http://localhost:52431/Featured/";
    return this._http.delete<void>(this._ItemUrl+ featureID);
    //this method in the api doesnt delete the record - it simply updates the active 
    //property to 1 for inactive. the get should only pull records where the active is set to 0
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }
}



