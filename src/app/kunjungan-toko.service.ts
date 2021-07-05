import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { kunjunganToko } from '../app/kunjungatoko';


@Injectable({
  providedIn: 'root'
})
export class KunjunganTokoService {

  _url ='https://okt20.onlineberkas.com/api/setorans/get-list';

  constructor(private _http: HttpClient) { }
  PostData(kunjunganToko: kunjunganToko){
    return this._http.post<any>(this._url, kunjunganToko);
  }
  getLocationService():Promise<any>{
    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition(resp=>{
        resolve({lng: resp.coords.longitude, lat: resp.coords.latitude}),
        reject('wrong');
      })
    })
  }


}
