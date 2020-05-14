import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FeaturedProductService implements Resolve<any>{

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

  feature:any;
  routeParams:any;
  featuredList:any;

  onFeaturedsChanged: BehaviorSubject<any>;

  constructor(private _http: HttpClient) {
    this.onFeaturedsChanged = new BehaviorSubject([]);  
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
  {
      this.routeParams = route.params;

      return new Promise((resolve, reject) => {
          Promise.all([
              this.getFeaturedTable()
          ]).then(
              () => {
                  resolve();
              },
              reject
          );
      });
  }


  getFeaturedTable(): Promise<any> {
    this._ItemUrl = "http://localhost:52431/Featured/GetAll"

    return new Promise((resolve, reject) => {
      this._http.get(this._ItemUrl)
          .subscribe((response: any) => {
              this.featuredList = response;
              this.onFeaturedsChanged.next(this.featuredList);
              resolve(this.featuredList);
          }, reject);
  });
    
  }

  getFeaturedProduct(Id:number): Promise<any> {
    this._ItemUrl = `http://localhost:52431/Featured/Product/${Id}`;

    return new Promise((resolve, reject) => {
      this._http.get(this._ItemUrl)
          .subscribe((response: any) => {
              this.feature = response;
              this.onFeaturedsChanged.next(this.feature);
              resolve(this.feature);
          }, reject);
  });
    
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }
}

@Injectable()
export class FeaturedResolve implements Resolve<any>
{

    constructor(
        private featuredService: FeaturedProductService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any>
    {
      let id = route.paramMap.get('id')
        return this.featuredService.getFeaturedProduct(+id);
    }
}