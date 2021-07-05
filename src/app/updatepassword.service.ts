import { Injectable } from '@angular/core';

import { UpdatePassword } from '../app/updatepassword';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UpdatepasswordService {

  _url ='https://okt20.onlineberkas.com/api/users/update';
  constructor(private _http: HttpClient) { }
  UpdatePassword(UpdatePassword: UpdatePassword){
    return this._http.post<any>(this._url, UpdatePassword);
  }
}
