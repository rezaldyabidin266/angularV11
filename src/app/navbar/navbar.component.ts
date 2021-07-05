import { Component, OnInit } from '@angular/core';

//Interface login
import { Username } from '../navbar';

//Rounter
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username:any = '';

  constructor(

    private route: ActivatedRoute,
    private location: Location,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.RequestRefreshUsername()
  }

  RequestRefreshUsername(){
      this.username = String(localStorage.getItem("username"));
      let buttonClose: any = document.querySelectorAll('a');
      // document.querySelectorAll('a').addEventListener("click",function(){
      //   if(buttonClose.classList){
      //     document.querySelectorAll('a').classList.remove('close-btn');
      //   }else{
      //     document.querySelectorAll('a').classList.contains('close-btn')
      //   }

      // })
  }



  Logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
    this.username = String(localStorage.getItem("username"));
  }
}
