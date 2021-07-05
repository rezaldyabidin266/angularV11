import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Interface login
import { freezer } from '../freezer';
import { tempGambar } from '../tempGambar';
import { tempGambarUpload} from '../tempGambarUpload';
import { imageFreezer } from '../imageFreezer'
import { imageFreezerLokasi } from '../imageFreezerLokasi';
import { imageFreezerDisplay } from '../imageFreezerDisplay';
import { imageFreezerStock } from '../imageFreezerStock';


//Service
import { FreezerService } from '../freezer.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { Location } from '@angular/common';

@Component({
  selector: 'app-freezer',
  templateUrl: './freezer.component.html',
  styleUrls: ['./freezer.component.css']
})
export class FreezerComponent implements OnInit {

  //UrlUpload
  url = 'https://okt20.onlineberkas.com/api/files/upload-gambarFreezer';

  selectedFileAwal!: File;
  selectedFileLokasi!: File;
  selectedFileDisplay!: File;
  selectedFileStock!: File;

  imageSrcAwal:any;
  imageSrcLokasi:any;
  imageSrcDisplay:any;
  imageSrcStock:any;

  previewAwal:any;
  previewLokasi:any;
  previewDisplay:any;
  previewStock:any;


 //Token
 Token  = new freezer('','',''); 

//tempGambar 
  tempGambar = new tempGambar('','','','');

  //GambarFreezer
  imageFreezer = new imageFreezer('','');
  imageFreezerLokasi = new imageFreezerLokasi('','');
  imageFreezerDisplay = new imageFreezerDisplay('','');
  imageFreezerStock= new imageFreezerStock('','');

 //Data rensponse
 FreezerData:any = [];

 //Data tempGambar
 tempGambarData:any = [];

 //Data Upload tempGambar
 tempGambarUpload = new tempGambarUpload('','','','');


public id : any;//idFreezer
public idSetoran : any;//Idsetoran
public freezer : any; //idFreezer
public posisiGambar:any;

idGambar : any;
pathAwal :any;
pathLokasi :any;
pathDisplay: any;
pathStock: any;

  constructor(

    private FreezerService : FreezerService,
    private route : ActivatedRoute,
    private Http : HttpClient,
    private domSanitizer: DomSanitizer,
    private location : Location

  ) { }

  ngOnInit(): void {
    let idFreezer = (this.route.snapshot.paramMap.get('id'));
    this.id = idFreezer;

    this.RefreshData();
    // this.RefreshtempGambar();
    // this.RefreshImageAwal();
    // this.RefreshImageLokasi();
    // this.RefreshImageDisplay();
    // this.RefreshImageStock();
  }

  RefreshData(){

    let idFreezerTemp : any;
    this.Token.token = String(localStorage.getItem("token"));
    this.idSetoran = (localStorage.getItem("setoranId"));
    this.Token.setoranId = parseInt(this.idSetoran);
    this.Token.customerId = parseInt(this.id);
    //Ambil EventEmitter with form value
    // console.log(this.CounterService)
        //Ambil EventEmitter with form value
        this.FreezerService.PostData(this.Token)
        .subscribe(
          (resp : any) => {
            this.FreezerData = resp;
          for(let rensponse of resp){  
            localStorage.setItem('idFreezer', rensponse.freezerId);
            this.freezer = rensponse.freezerId;
           
          }
          console.log(this.freezer)
          this.tempGambar.token = String(localStorage.getItem("token"));
          this.idSetoran = (localStorage.getItem("setoranId"));
      
          this.tempGambar.setoranId = parseInt(this.idSetoran);
          this.tempGambar.customerId = parseInt(this.id);
          this.tempGambar.freezerId = parseInt(this.freezer);
        
          //Ambil EventEmitter with form value
          // console.log(this.CounterService)
              //Ambil EventEmitter with form value
              this.FreezerService.PostDatatempGambar(this.tempGambar)
              .subscribe(
                (respGambar:any) => {
             
                  console.log(respGambar)
                  this.pathAwal = respGambar.pathAwal;
                  this.pathLokasi = respGambar.pathLokasi;
                  this.pathDisplay = respGambar.pathDisplay;
                  this.pathStock = respGambar.pathStock;
                  this.tempGambarData = respGambar;
                  // localStorage.setItem('pathAwal', this.tempGambarData.pathAwal);
                  // localStorage.setItem('pathLokasi', this.tempGambarData.pathLokasi);
                  // localStorage.setItem('pathDisplay', this.tempGambarData.pathDisplay);
                  // localStorage.setItem('pathStock', this.tempGambarData.pathStock);
                
                for (let country of Object.keys(this.tempGambarData)) {
                  var capital = this.tempGambarData[country];
              
              } 
              console.log(this.pathAwal)
              console.log(this.pathLokasi)
              console.log(this.pathDisplay)
              console.log(this.pathStock)

              //Image Awal
              this.imageFreezer.token =  String(localStorage.getItem("token"));
              this.imageFreezer.namafile = this.pathAwal;
            
          
              this.FreezerService.PostDatatempGambarGet(this.imageFreezer)
              .subscribe(
                (resp : any) => {
             
                console.log(resp) //response ya blob 
               
                const url = window.URL || window.webkitURL; //ubah menjadi URL
                // this.imageSrc = url.createObjectURL(resp);
                const blobAwal: Blob = new Blob([resp]);//Menjadikan Blob baru
          
                //Membersihkan URL usafe dengan domSanitizer dan create url blob
                const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(url.createObjectURL(blobAwal));
                //Tampilkan gambar
                 this.imageSrcAwal = objectUrl;
                  }, error => console.log('Error', error)
              )

              //Image Lokasi
              this.imageFreezerLokasi.token =  String(localStorage.getItem("token"));
              this.imageFreezerLokasi.namafile = this.pathLokasi;
            
          
              this.FreezerService.PostDatatempGambarGetLokasi(this.imageFreezerLokasi)
              .subscribe(
                (resp : any) => {
             
                console.log(resp) //response ya blob 
               
                const url = window.URL || window.webkitURL; //ubah menjadi URL
                // this.imageSrc = url.createObjectURL(resp);
                const blobLokasi: Blob = new Blob([resp]);//Menjadikan Blob baru
          
                //Membersihkan URL usafe dengan domSanitizer dan create url blob
                const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(url.createObjectURL(blobLokasi));
                //Tampilkan gambar
                 this.imageSrcLokasi = objectUrl;
                  }, error => console.log('Error', error)
              )

              //ImageDisplay

              this.imageFreezerDisplay.token =  String(localStorage.getItem("token"));
              this.imageFreezerDisplay.namafile =this.pathDisplay;
           
          
              this.FreezerService.PostDatatempGambarGetDisplay(this.imageFreezerDisplay)
              .subscribe(
                (resp : any) => {
             
                console.log(resp) //response ya blob 
               
                const url = window.URL || window.webkitURL; //ubah menjadi URL
                // this.imageSrc = url.createObjectURL(resp);
                const blobDisplay: Blob = new Blob([resp]);//Menjadikan Blob baru
          
                //Membersihkan URL usafe dengan domSanitizer dan create url blob
                const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(url.createObjectURL(blobDisplay));
                //Tampilkan gambar
                this.imageSrcDisplay = objectUrl;
                  }, error => console.log('Error', error)
              )

              //ImageStock
              this.imageFreezerStock.token =  String(localStorage.getItem("token"));
              this.imageFreezerStock.namafile = this.pathStock;
             
              this.FreezerService.PostDatatempGambarGetStock(this.imageFreezerStock)
              .subscribe(
                (resp : any) => {
             
                console.log(resp) //response ya blob 
               
                const url = window.URL || window.webkitURL; //ubah menjadi URL
                // this.imageSrc = url.createObjectURL(resp);
                const blobStock: Blob = new Blob([resp]);//Menjadikan Blob baru
          
                //Membersihkan URL usafe dengan domSanitizer dan create url blob
                const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(url.createObjectURL(blobStock));
                //Tampilkan gambar
                 this.imageSrcStock = objectUrl;
                  }, error => console.log('Error', error)
              )

                  }, error => console.log('Error', error)
              )


            }, error => {
              console.log(error);
            }
            
        )  
   
  }

  // RefreshtempGambar(){
  //   this.tempGambar.token = String(localStorage.getItem("token"));
  //   this.idSetoran = (localStorage.getItem("setoranId"));
  //   this.freezer =   (localStorage.getItem("idFreezer"));

  //   this.tempGambar.setoranId = parseInt(this.idSetoran);
  //   this.tempGambar.customerId = parseInt(this.id);
  //   this.tempGambar.freezerId = parseInt(this.freezer);
  
  //   //Ambil EventEmitter with form value
  //   // console.log(this.CounterService)
  //       //Ambil EventEmitter with form value
  //       this.FreezerService.PostDatatempGambar(this.tempGambar)
  //       .subscribe(
  //         (respGambar:any) => {
       
  //           console.log(respGambar)
            
  //           this.tempGambarData = respGambar;
  //           localStorage.setItem('pathAwal', this.tempGambarData.pathAwal);
  //           localStorage.setItem('pathLokasi', this.tempGambarData.pathLokasi);
  //           localStorage.setItem('pathDisplay', this.tempGambarData.pathDisplay);
  //           localStorage.setItem('pathStock', this.tempGambarData.pathStock);
          
  //         for (let country of Object.keys(this.tempGambarData)) {
  //           var capital = this.tempGambarData[country];
          
  //       }
          

  //           }, error => console.log('Error', error)
  //       )
  // }

  onFileAwal(event: any){
    this.selectedFileAwal = <File>event.target.files[0];
    console.log(this.selectedFileAwal)
    
    //nampilin preview
    const url = window.URL || window.webkitURL; //ubah menjadi URL
    const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(url.createObjectURL(<File>event.target.files[0]));
    this.previewAwal = objectUrl;
  }

  onFileLokasi(event: any){
    this.selectedFileLokasi = <File>event.target.files[0];
    const url = window.URL || window.webkitURL; //ubah menjadi URL
    const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(url.createObjectURL(<File>event.target.files[0]));
    this.previewLokasi = objectUrl;
  }

  onFileDisplay(event: any){
    this.selectedFileDisplay = <File>event.target.files[0];
    const url = window.URL || window.webkitURL; //ubah menjadi URL
    const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(url.createObjectURL(<File>event.target.files[0]));
    this.previewDisplay = objectUrl;
  }

  onFileStock(event: any){
    this.selectedFileStock = <File>event.target.files[0];
    const url = window.URL || window.webkitURL; //ubah menjadi URL
    const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(url.createObjectURL(<File>event.target.files[0]));
    this.previewStock = objectUrl;
  }



  modalAwal(idGambar:any){
  
    this.idGambar = idGambar;

  }

  modalLokasi(idGambar:any){
    this.idGambar = idGambar;

  }
  modalDisplay(idGambar:any){
    this.idGambar = idGambar;

  }
  modalStock(idGambar:any){
    this.idGambar = idGambar;

  }


  postAwal(){
    this.posisiGambar = 'Awal';
   
    this.tempGambarUpload.token = String(localStorage.getItem("token"));
    this.tempGambarUpload.tempGambarId = String(this.idGambar);

    const dataAwal = new FormData();
    dataAwal.append("token",  this.tempGambarUpload.token);
    dataAwal.append("tempGambarId", this.tempGambarUpload.tempGambarId);
    dataAwal.append("filegambar", this.selectedFileAwal, this.selectedFileAwal.name);
    dataAwal.append("posisiGambar", this.posisiGambar);
    dataAwal.forEach((value,key) => {
      console.log(key+" "+value)
    });

    this.Http.post(this.url,dataAwal,{responseType: 'text' }).subscribe(
      (result)=>{
        location.reload();
      }, error => console.log('Error', error)
    )
  }

  postLokasi(){
    this.posisiGambar = 'Lokasi';
    this.tempGambarUpload.token = String(localStorage.getItem("token"));
    this.tempGambarUpload.tempGambarId = String(this.idGambar);

    const dataLokasi = new FormData();
    dataLokasi.append("token",  this.tempGambarUpload.token);
    dataLokasi.append("tempGambarId", this.tempGambarUpload.tempGambarId);
    dataLokasi.append("filegambar", this.selectedFileLokasi, this.selectedFileLokasi.name);
    dataLokasi.append("posisiGambar", this.posisiGambar);
    dataLokasi.forEach((value,key) => {
      console.log(key+" "+value)
    });

    this.Http.post(this.url,dataLokasi,{responseType: 'text' }).subscribe(
      (result)=>{
        location.reload();
      }, error => console.log('Error', error)
    )
  }

  postDisplay(){
    this.posisiGambar = 'Display';
    this.tempGambarUpload.token = String(localStorage.getItem("token"));
    this.tempGambarUpload.tempGambarId = String(this.idGambar);

    const dataDisplay = new FormData();
    dataDisplay.append("token",  this.tempGambarUpload.token);
    dataDisplay.append("tempGambarId", this.tempGambarUpload.tempGambarId);
    dataDisplay.append("filegambar", this.selectedFileDisplay, this.selectedFileDisplay.name);
    dataDisplay.append("posisiGambar", this.posisiGambar);
    dataDisplay.forEach((value,key) => {
      console.log(key+" "+value)
    });
    
    this.Http.post(this.url,dataDisplay,{responseType: 'text' }).subscribe(
      (result)=>{
        location.reload();
      }, error => console.log('Error', error)
    )
  }

  postStock(){
    this.posisiGambar = 'Stock';
    this.tempGambarUpload.token = String(localStorage.getItem("token"));
    this.tempGambarUpload.tempGambarId = String(this.idGambar);

    const dataStock = new FormData();
    dataStock.append("token",  this.tempGambarUpload.token);
    dataStock.append("tempGambarId", this.tempGambarUpload.tempGambarId);
    dataStock.append("filegambar", this.selectedFileStock, this.selectedFileStock.name);
    dataStock.append("posisiGambar", this.posisiGambar);
    dataStock.forEach((value,key) => {
      console.log(key+" "+value)
    });

    this.Http.post(this.url,dataStock,{responseType: 'text' }).subscribe(
      (result)=>{
        location.reload();
      }, error => console.log('Error', error)
    )
  }

  // RefreshImageAwal(){

  //   this.imageFreezer.token =  String(localStorage.getItem("token"));
  //   this.imageFreezer.namafile = String(localStorage.getItem("pathAwal"));
  

  //   this.FreezerService.PostDatatempGambarGet(this.imageFreezer)
  //   .subscribe(
  //     (resp : any) => {
   
  //     console.log(resp) //response ya blob 
     
  //     const url = window.URL || window.webkitURL; //ubah menjadi URL
  //     // this.imageSrc = url.createObjectURL(resp);
  //     const blobAwal: Blob = new Blob([resp]);//Menjadikan Blob baru

  //     //Membersihkan URL usafe dengan domSanitizer dan create url blob
  //     const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(url.createObjectURL(blobAwal));
  //     //Tampilkan gambar
  //      this.imageSrcAwal = objectUrl;
  //       }, error => console.log('Error', error)
  //   )
  // }

  // RefreshImageLokasi(){

  //   this.imageFreezerLokasi.token =  String(localStorage.getItem("token"));
  //   this.imageFreezerLokasi.namafile = String(localStorage.getItem("pathLokasi"));
  

  //   this.FreezerService.PostDatatempGambarGetLokasi(this.imageFreezerLokasi)
  //   .subscribe(
  //     (resp : any) => {
   
  //     console.log(resp) //response ya blob 
     
  //     const url = window.URL || window.webkitURL; //ubah menjadi URL
  //     // this.imageSrc = url.createObjectURL(resp);
  //     const blobLokasi: Blob = new Blob([resp]);//Menjadikan Blob baru

  //     //Membersihkan URL usafe dengan domSanitizer dan create url blob
  //     const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(url.createObjectURL(blobLokasi));
  //     //Tampilkan gambar
  //      this.imageSrcLokasi = objectUrl;
  //       }, error => console.log('Error', error)
  //   )
  // }

  // RefreshImageDisplay(){

  //   this.imageFreezerDisplay.token =  String(localStorage.getItem("token"));
  //   this.imageFreezerDisplay.namafile = String(localStorage.getItem("pathDisplay"));
 

  //   this.FreezerService.PostDatatempGambarGetDisplay(this.imageFreezerDisplay)
  //   .subscribe(
  //     (resp : any) => {
   
  //     console.log(resp) //response ya blob 
     
  //     const url = window.URL || window.webkitURL; //ubah menjadi URL
  //     // this.imageSrc = url.createObjectURL(resp);
  //     const blobDisplay: Blob = new Blob([resp]);//Menjadikan Blob baru

  //     //Membersihkan URL usafe dengan domSanitizer dan create url blob
  //     const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(url.createObjectURL(blobDisplay));
  //     //Tampilkan gambar
  //     this.imageSrcDisplay = objectUrl;
  //       }, error => console.log('Error', error)
  //   )
  // }

  // RefreshImageStock(){

  //   this.imageFreezerStock.token =  String(localStorage.getItem("token"));
  //   this.imageFreezerStock.namafile = String(localStorage.getItem("pathStock"));
   
  //   this.FreezerService.PostDatatempGambarGetStock(this.imageFreezerStock)
  //   .subscribe(
  //     (resp : any) => {
   
  //     console.log(resp) //response ya blob 
     
  //     const url = window.URL || window.webkitURL; //ubah menjadi URL
  //     // this.imageSrc = url.createObjectURL(resp);
  //     const blobStock: Blob = new Blob([resp]);//Menjadikan Blob baru

  //     //Membersihkan URL usafe dengan domSanitizer dan create url blob
  //     const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(url.createObjectURL(blobStock));
  //     //Tampilkan gambar
  //      this.imageSrcStock = objectUrl;
  //       }, error => console.log('Error', error)
  //   )
  // }



  back(): void {
    this.location.back();
  }


}
