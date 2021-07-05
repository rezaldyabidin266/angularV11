import { Injectable } from '@angular/core';

import { detail_history } from '../app/detail-history';
import { HttpClient } from '@angular/common/http';
import { imageCounter } from '../app/imageCounter';

@Injectable({
  providedIn: 'root'
})
export class DetailHistoryService {
  _url ='https://okt20.onlineberkas.com/api/assets/get-history';
  constructor(private _http: HttpClient) { }
  PostData(detail_history: detail_history){
    return this._http.post<any>(this._url, detail_history);
  }
  
  url_Image = 'https://okt20.onlineberkas.com/api/files/get-fileAsset';
  PostDataImage(imageCounter: imageCounter){
    return this._http.post(this.url_Image, imageCounter, {responseType: 'blob' });
  }
}
