import { Component, OnInit } from '@angular/core';

// import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl} from '@angular/forms';

//getLokasi
import {IPositionTracker} from "../lacakposisi";
import GeoLocationPositionTracker from "../getLokasi";
// import { Geolocation } from '@ionic-native/geolocation/ngx';

//Interface login
import { Login } from '../login';

//Service
import { LoginServiceService } from '../login-service.service';

//Rounter
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email = new FormControl('');
  // loginForm = new FormGroup({
  //   username : new FormControl(''),
  //   password : new FormControl(''),
  //   latitude : new FormControl(null),
  //   longitude : new FormControl(null),
  //   remarks : new FormControl(null),
   
  // });

  loginModel = new Login('','','','','');
  public ErrorLogin:any = '';
  public lokasi:any;
  public lat:any;
  public long:any;
  public remarks:any;



  constructor(
    private loginService : LoginServiceService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
 
     ) {}

  ngOnInit(): void {
    // this.getLocation();
    let errorMessage = "";
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lokasi = position.coords;
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        this.remarks = "sukses";
        console.log(this.lat, this.long, this.remarks);
        this.loginModel.longitude = String(this.lat);
        this.loginModel.latitude = String(this.long );
        this.loginModel.remarks = this.remarks;
      },
      (error) => {
          if (error.code === 1) {
              errorMessage = "Reject Location";
          } 
        this.lat = 0;
        this.long =0;
        this.remarks = errorMessage;
        this.loginModel.longitude = String(this.lat);
        this.loginModel.latitude = String(this.long );
        this.loginModel.remarks = this.remarks;
      });
   } else {
    this.lat = 0;
    this.long = 0;
    this.remarks = "Reject Location";

  }
  
  }

  // getLocation(){
  //   this.loginService.getLocationService().then(resp=>{
  //     console.log(resp.lng);
  //     console.log(resp.lat);
  //     this.loginModel.longitude = String(resp.lng);
  //     this.loginModel.latitude = String(resp.lat);
  //     this.loginModel.remarks = "Sukses";
  //     let errorMessage:any;
  //     const error =  (error: any) =>{
  //       if (error.code === 1) {
  //         errorMessage = "Reject Location";
  //     } else {
  //         errorMessage = "An unknown error occurred.";
  //     }
  //     resp.lng = 0;
  //     resp.lat = 0;
  //     this.loginModel.remarks = errorMessage;
  //     }
  //   })
  // }

  onSubmit(){
    let message = "";
    const errorTemplate: HTMLElement | null = document.getElementById('error');

    //Ambil EventEmitter with form value
    this.loginService.enroll(this.loginModel)
    .subscribe(
      (resp : any) => {
      console.log(resp.token)
      console.log(resp)
      this.router.navigate(['/layout']);
      localStorage.setItem('token', resp.token);
      localStorage.setItem('username', resp.username);
    }, error => {
      console.log(error);
      message += '<p class="text-danger text-center">Username / Password tidak ditemukan</p>';
      if (!errorTemplate) return;
    errorTemplate.innerHTML = message;
     
    }
    );
  }

  

}
