import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


//Interface detail
import { detail_history } from '../detail-history';
import { imageCounter } from '../imageCounter';

//Service
import { DetailHistoryService } from '../detail-history.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-history',
  templateUrl: './detail-history.component.html',
  styleUrls: ['./detail-history.component.css']
})
export class DetailHistoryComponent implements OnInit {


  // public queryString:any;
  p :number = 1;
  c :number = 1;

  public detail: any;
  imageSrc:any;


  //Token
 Token  = new detail_history('',''); 

  image = new imageCounter('');

 //Data rensponse
 detail_historyData:any = [];


  constructor(
    private route: ActivatedRoute,
    private DetailHistoryService : DetailHistoryService,
    private Http : HttpClient,
    private domSanitizer: DomSanitizer,
    private location : Location
  ) { }

  ngOnInit(): void {
    let id = (this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.detail = id;

    this.RefreshData()
  }
  RefreshData(){
    this.Token.token = String(localStorage.getItem("token"));
    this.Token.id = parseInt(this.detail);
    //Ambil EventEmitter with form value
    // console.log(this.CounterService)
        //Ambil EventEmitter with form value

        this.DetailHistoryService.PostData(this.Token)
        .subscribe(
          (resp : any) => {
       
          console.log(resp)
          this.detail_historyData = resp;  
        
          for(let rensponse of resp){  
          }
            }, error => console.log('Error', error)
        )

  }

 ImageReview(data:any){
   
    this.image.namafile =  data.pathImage;
    this.DetailHistoryService.PostDataImage(this.image)
    .subscribe(
      (resp : any) => {
   
      console.log(resp) //response ya blob 
     
      const url = window.URL || window.webkitURL; //ubah menjadi URL
      // this.imageSrc = url.createObjectURL(resp);
      const blob: Blob = new Blob([resp]);//Menjadikan Blob baru

      //Membersihkan URL usafe dengan domSanitizer dan create url blob
      const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(url.createObjectURL(blob));
      //Tampilkan gambar
      this.imageSrc = objectUrl;
        }, error => console.log('Error', error)
    )
 }

 back(): void {
  this.location.back();
}




}
 