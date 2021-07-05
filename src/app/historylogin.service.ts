import { Injectable } from '@angular/core';

import { HistoryLogin } from '../app/historylogin';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HistoryloginService {

  _url ='https://okt20.onlineberkas.com/api/users/get-hislocation';
  constructor(private _http: HttpClient) { }
  PostData(HistoryLogin: HistoryLogin){
    return this._http.post<any>(this._url, HistoryLogin);
  }

  
}
