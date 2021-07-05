import { Injectable } from '@angular/core';

import { Product } from '../app/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _url ='https://okt20.onlineberkas.com/api/monitoringtokos/get-list';
  constructor(private _http: HttpClient) { }
  PostData(Product: Product){
    return this._http.post<any>(this._url, Product);
  }

}
