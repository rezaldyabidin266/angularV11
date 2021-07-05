import { Injectable } from '@angular/core';

import { motivasi } from '../app/motivasi';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotivasiService {

  urlGambar= "https://okt20.onlineberkas.com/api/menus/get-motivasigambar";
  constructor(private _http: HttpClient) { }

  getImage() {
  return this._http.get<any>(this.urlGambar);

}
 
url_Image = 'https://okt20.onlineberkas.com/api/files/get-fileMotivasi';
PostDataImage(motivasi: motivasi){
  return this._http.post(this.url_Image, motivasi, {responseType: 'blob' });
}

url_kata = "https://okt20.onlineberkas.com/api/menus/get-motivasi";
getKata_kata(){
  return this._http.get(this.url_kata);
}

}
