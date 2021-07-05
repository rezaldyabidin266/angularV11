import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

//Interface login
import { Counter } from '../counter';
import { UploadCounter } from '../upload';

//Service
import { CounterService } from '../counter.service';
import { HttpClient } from '@angular/common/http';

import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
 
  selectedFile!: File;

  public queryString:any;
  p :number = 1;
  c :number = 1;

  alert:boolean=false;

  //UploadGambar url
  _urlUploadCounter = 'https://okt20.onlineberkas.com/api/files/upload-pencatatanAsset';
 //Token
 Token  = new Counter(''); 

 //Data rensponse
 CounterData:any = [];

 //DataUpload
 UploadCounter = new UploadCounter('','','','','');
 CounterId: any;

 preview:any;


  constructor(
    private CounterService : CounterService,
    private Http : HttpClient,
    private router : Router,
    private domSanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.RefreshData()
  }
  RefreshData(){
    this.Token.token = String(localStorage.getItem("token"));
    //Ambil EventEmitter with form value
    // console.log(this.CounterService)
        //Ambil EventEmitter with form value
        this.CounterService.PostData(this.Token)
        .subscribe(
          (resp : any) => {
       
          console.log(resp)
          this.CounterData = resp;  
          for(let rensponse of resp){  
         
          }
            }, error => console.log('Error', error)
        )

  }

  Upload(data:any){
    let id:any;
    console.log(data)
    this.CounterId = data;
    // let idCounter:any;
    // id = document.querySelectorAll(".detail_upload");
    // id.forEach((el: any) => {
    //     el.addEventListener("click", (event: { target: { id: any; }; }) => {
    //         idCounter = event.target.id;
    //       console.log(idCounter);
    //       this.CounterId = idCounter
    //       });
    // });
    // this.CounterId = idCounter;
    // console.log(idCounter);
  }

  onSelect(data: any){
    this.router.navigate(['layout/counter',data.id]);
  }

  onFile(event: any){
    this.selectedFile = <File>event.target.files[0];
    const url = window.URL || window.webkitURL; //ubah menjadi URL
    const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(url.createObjectURL(<File>event.target.files[0]));
    this.preview = objectUrl;
  }

  Post(){
    this.UploadCounter.token = String(localStorage.getItem("token"));
    this.UploadCounter.id = String(this.CounterId);

    const data = new FormData();
    data.append("filegambar", this.selectedFile, this.selectedFile.name);
    data.append("id", this.UploadCounter.id);
    data.append("keterangan", this.UploadCounter.keterangan);
    data.append("counter", this.UploadCounter.counter);
    data.append("token",  this.UploadCounter.token);
    console.log(data);
    
    this.Http.post(this._urlUploadCounter,data,{responseType: 'text' }).subscribe(
      (result)=>{
        this.alert = true;
        console.log(result)
        location.reload();
      }, error => console.log('Error', error)
    )

  }
  Clear(){
    this.UploadCounter.keterangan = '';
    this.UploadCounter.counter = '';
  }
}
