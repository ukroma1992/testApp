import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProducts } from './products';
import { tap, catchError } from 'rxjs/operators';



@Injectable()
export class ProductService {

  private _url: string = "https://demo2343337.mockable.io/products.json";

  constructor(private http:HttpClient) { }

  getProducts(): Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this._url)
      .pipe(tap(data => JSON.stringify(data)), catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }

}