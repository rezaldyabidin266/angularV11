import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

//Interface kunjunganberhasil
import { kunjunganBerhasil } from '../kunjungan-berhasil';
import { kunjunganCek } from '../kunjunganCek'
import { kunjunganNote } from '../kunjungan-note';

//Service
import { KunjunganBerhasilService } from '../kunjungan-berhasil.service';



@Component({
  selector: 'app-kunjungan-berhasil',
  templateUrl: './kunjungan-berhasil.component.html',
  styleUrls: ['./kunjungan-berhasil.component.css']
})
export class KunjunganBerhasilComponent implements OnInit {
  public detail :any;
  public long :any;
  public lat :any;
  public Idkunjungan:any;
  public namaToko : any;
  public truefalsecek :any;

  public queryString:any;
  p :number = 1;
  c :number = 1;
   //Token
 Token  = new kunjunganBerhasil('',''); 

 //Data rensponse
 KunjunganTBerhasilData:any = [];

  //Model Chek
 Cek = new kunjunganCek('','','','','','');

 //Model Note
 Note = new kunjunganNote('','','');
 


  constructor(
    private route: ActivatedRoute,
    private KunjunganBerhasilService : KunjunganBerhasilService,
    private router : Router,
    private location : Location
  ) { }

  ngOnInit(): void {
    let id = (this.route.snapshot.paramMap.get('id'));
    let long = String(localStorage.getItem("long"));
    let lat = String(localStorage.getItem("lat"));
    console.log(id)
    this.detail = id;

    this.long = long;
    this.lat = lat;
   
    this.RefreshData();
  }

  RefreshData(){
    this.Token.token = String(localStorage.getItem("token"));
    this.Token.setoranId = parseInt(this.detail);
    //Ambil EventEmitter with form value
    // console.log(this.CounterService)
        //Ambil EventEmitter with form value
        this.KunjunganBerhasilService.PostData(this.Token)
        .subscribe(
          (resp : any) => {
       
          console.log(resp)
          this.KunjunganTBerhasilData = resp;  
          for(let rensponse of resp){  
            this.namaToko = rensponse.nama;
            this.truefalsecek = rensponse.isBerhasil;

          }
            }, error => console.log('Error', error)
        )

  }

  changeCek(data:any,dataId:any){
    console.log(data)
    console.log(dataId)
    if(data === true){
   
      this.Cek.token = String(localStorage.getItem("token"));
      this.Cek.KunjunganId = dataId;
      this.Cek.isBerhasil = false;
      this.Cek.longitude = this.long; 
      this.Cek.latitude = this.lat;
      this.Cek.remarks;
      this.KunjunganBerhasilService.PostDataCek(this.Cek)
    .subscribe(
      (resp : any) => {
        location.reload();
      }, error => console.log('Error', error)
    )
    }else if(data === false){

      this.Cek.token = String(localStorage.getItem("token"));
      this.Cek.KunjunganId = dataId;
      this.Cek.isBerhasil = true;
      this.Cek.longitude = this.long; 
      this.Cek.latitude = this.lat;
      this.Cek.remarks;
      this.KunjunganBerhasilService.PostDataCek(this.Cek)
      .subscribe( (resp : any) => {
        location.reload();
      }, error => console.log('Error', error))
    }
   
  }

  updateNote(data:any,dataNama:any){

    this.Idkunjungan = data;
    this.namaToko = dataNama;

  }

  kirimNote(){
    this.Note.token = String(localStorage.getItem("token"));
    this.Note.KunjunganId =  this.Idkunjungan;

    this.KunjunganBerhasilService.PostDataNote(this.Note).subscribe(
      (resp:any) => {
        location.reload();
      },error => console.log('Error',error)
    )
  }

  FreezerDetail(idCustomer:any){
    this.router.navigate(['layout/kunjunganBerhasil',idCustomer]);
   
  }

  Clear(){
    this.Note.note = '';
  }

  back(): void {
    this.location.back();
  }


}
