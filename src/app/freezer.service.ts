import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { freezer } from '../app/freezer';
import { tempGambar } from '../app/tempGambar';
import { imageFreezer } from '../app/imageFreezer';
import { imageFreezerLokasi } from './imageFreezerLokasi';
import { imageFreezerDisplay } from './imageFreezerDisplay';
import { imageFreezerStock } from './imageFreezerStock';


@Injectable({
  providedIn: 'root'
})
export class FreezerService {

  _url ='https://okt20.onlineberkas.com/api/setorans/get-freezerCustomer';
  url_tempGambar = 'https://okt20.onlineberkas.com/api/setorans/get-tempGambarFreezer';
  url_tempGambarGet = 'https://okt20.onlineberkas.com/api/files/get-fileFreezer';

  constructor(private _http: HttpClient) { }
  PostData(freezer: freezer){
    return this._http.post<any>(this._url, freezer);
  }

  PostDatatempGambar(tempGambar: tempGambar){
    return this._http.post<any>(this.url_tempGambar, tempGambar);
  }

  PostDatatempGambarGet(imageFreezer: imageFreezer){
    return this._http.post(this.url_tempGambarGet, imageFreezer, {responseType: 'blob' });
  }

  PostDatatempGambarGetLokasi(imageFreezerLokasi: imageFreezerLokasi){
    return this._http.post(this.url_tempGambarGet, imageFreezerLokasi, {responseType: 'blob' });
  }

  PostDatatempGambarGetDisplay(imageFreezerDisplay: imageFreezerDisplay){
    return this._http.post(this.url_tempGambarGet, imageFreezerDisplay, {responseType: 'blob' });
  }

  PostDatatempGambarGetStock(imageFreezerStock: imageFreezerStock){
    return this._http.post(this.url_tempGambarGet, imageFreezerStock, {responseType: 'blob' });
  }
}
