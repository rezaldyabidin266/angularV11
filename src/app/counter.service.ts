import { Injectable } from '@angular/core';

import { Counter } from '../app/counter';
import { UploadCounter } from '../app/upload';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CounterService {

  _url ='https://okt20.onlineberkas.com/api/assets/get-list';
  _urlUploadCounter = 'https://okt20.onlineberkas.com/api/files/upload-pencatatanAsset';

  constructor(private _http: HttpClient) { }
  
  PostData(Counter: Counter){
    return this._http.post<any>(this._url, Counter);
  }

  PostUploadCounter(UploadCounter: UploadCounter){
    return this._http.post<any>(this._urlUploadCounter, UploadCounter,);
  }

  
}
