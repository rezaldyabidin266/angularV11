import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { kunjunganBerhasil } from '../app/kunjungan-berhasil';
import { kunjunganCek } from '../app/kunjunganCek';
import { kunjunganNote } from '../app/kunjungan-note';

@Injectable({
  providedIn: 'root'
})
export class KunjunganBerhasilService {

  _url ='https://okt20.onlineberkas.com/api/setorans/get-Kunjungan';
  url_cek = 'https://okt20.onlineberkas.com/api/setorans/set-KunjunganBerhasil';
  url_Note = 'https://okt20.onlineberkas.com/api/setorans/set-kunjunganNote';
  constructor(private _http: HttpClient) { }
  PostData(kunjunganToko: kunjunganBerhasil){
    return this._http.post<any>(this._url, kunjunganToko);
  }

  PostDataCek(kunjunganCek: kunjunganCek){
    return this._http.post(this.url_cek, kunjunganCek,{responseType: 'text' });
  }

  PostDataNote(kunjunganNote: kunjunganNote){
    return this._http.post(this.url_Note, kunjunganNote,{responseType: 'text' });
  }
}
