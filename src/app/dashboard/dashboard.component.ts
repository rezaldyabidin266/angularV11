import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MotivasiService } from '../motivasi.service';
import { motivasi } from '../motivasi';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urlGambar= "https://okt20.onlineberkas.com/api/menus/get-motivasigambar";
  motivasi  = new motivasi('') 

  imageSrc:any;
  kalimatSrc:any;
  imageRandom : string | undefined;
  imageId: any;
  kalimatId:any;

  dataMotivasi:any = [];
  dataMotivasiKata:any = [];

  constructor( 
    private _http : HttpClient,
    private MotivasiService : MotivasiService,
    private domSanitizer: DomSanitizer,
    ) { }

  ngOnInit(): void {
      this.showConfig()
      this.showKata()
  }

showConfig() {

  let imageNamafile:any;
  let imageId:any;
  this.MotivasiService.getImage()
  .subscribe((resp : any) => {
 
    this.dataMotivasi = resp;

  for(let rensponse of resp){

  imageId = rensponse.id;
  imageNamafile = rensponse.namaFile;

  this.imageId = imageId;
  
  }
  
  this.motivasi.namafile =  imageNamafile;
  this.MotivasiService.PostDataImage(this.motivasi)
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

  });
}

randomImage(event: any){
  let target = event.target || event.srcElement || event.currentTarget;
  let idAttr = target.attributes.id;
  let id = idAttr.nodeValue;
  let imageNamafile:any;
  id =  Math.floor(Math.random() * id) + 1
  console.log(id)

  this.MotivasiService.getImage().subscribe((resp : any) =>{
    for(let rensponse of resp){
      if(id === rensponse.id){
        console.log(rensponse.namaFile);
        imageNamafile = rensponse.namaFile
      }
    }
    this.motivasi.namafile =  imageNamafile;
    this.MotivasiService.PostDataImage(this.motivasi)
    .subscribe(
      (resp : any) => {
   
      console.log(resp) //response ya blob 
     
      const url = window.URL || window.webkitURL; //ubah menjadi URL
      // this.imageSrc = url.createObjectURL(resp);
      const blob: Blob = new Blob([resp]);//Menjadikan Blob baru
  
      //Membersihkan URL usafe dengan domSanitizer dan create url blob
      const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(url.createObjectURL(blob));
      console.log(objectUrl)
      //Tampilkan gambar
      this.imageSrc = objectUrl;
        }, error => console.log('Error', error)
    )
  })
}


showKata(){

  let kalimat:any;
  this.MotivasiService.getKata_kata().subscribe((resp : any) =>{
   this.dataMotivasiKata = resp;
   for(let rensponse of resp){
    kalimat = rensponse.kalimat;
    this.kalimatId = rensponse.id;
    }
    this.kalimatSrc = kalimat;
  })  
}

randomKata(event:any){
  let target = event.target || event.srcElement || event.currentTarget;
  let idAttr = target.attributes.id;
  let id = idAttr.nodeValue;
  id =  Math.floor(Math.random() * id) + 1
  console.log(id);

  let kalimat:any;
  this.MotivasiService.getKata_kata().subscribe((resp:any) =>{
      for(let rensponse of resp){
        if(id === rensponse.id){
          console.log(rensponse.kalimat)
          kalimat = rensponse.kalimat;
        }
      }

      this.kalimatSrc = kalimat;

  })

  
}


}
