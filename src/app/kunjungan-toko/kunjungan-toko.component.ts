import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

//Interface login
import { kunjunganToko } from '../kunjungatoko';

//Service
import { KunjunganTokoService } from '../kunjungan-toko.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-kunjungan-toko',
  templateUrl: './kunjungan-toko.component.html',
  styleUrls: ['./kunjungan-toko.component.css']
})
export class KunjunganTokoComponent implements OnInit {

 //Token
 Token  = new kunjunganToko(''); 

 //Data rensponse
 KunjunganTokoData:any = [];

 //Navigator
  long:any;
  lat:any;

  public queryString:any;

  constructor(

    private KunjunganTokoService : KunjunganTokoService,
    private router : Router,
    private location : Location

  ) { }

  ngOnInit(): void {
    this.RefreshData();
    this.getLocation();
  }

  RefreshData(){
    this.Token.token = String(localStorage.getItem("token"));
    //Ambil EventEmitter with form value
    // console.log(this.CounterService)
        //Ambil EventEmitter with form value
        this.KunjunganTokoService.PostData(this.Token)
        .subscribe(
          (resp : any) => {
       
          this.KunjunganTokoData = resp;  
          console.log(resp);
          for(let rensponse of resp){  
          
          }
            }, error => console.log('Error', error)
        )

  }

  getLocation(){
    this.KunjunganTokoService.getLocationService().then(resp=>{
 
      this.long = resp.lng;
      this.lat = resp.lat;
      console.log(this.long);
      console.log(this.lat);
    })
  }

  onClick(data:any){
    this.router.navigate(['layout/kunjunganToko',data.setoranId]);
    localStorage.setItem('long', this.long);
    localStorage.setItem('lat', this.lat);
    localStorage.setItem('setoranId', data.setoranId);
  }


}
