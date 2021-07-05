import { Injectable } from '@angular/core';

import { Login } from '../app/login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  _url ='https://okt20.onlineberkas.com/api/users/login';
  constructor(private _http: HttpClient) { }
  enroll(login: Login){
    return this._http.post<any>(this._url, login);
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
