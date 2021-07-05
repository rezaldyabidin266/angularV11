import { Component, OnInit } from '@angular/core';

//Interface login
import { UpdatePassword } from '../updatepassword';

//Service
import { UpdatepasswordService } from '../updatepassword.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {

  UpdateModel = new UpdatePassword('','','');

  constructor(
    private UpdatepasswordService : UpdatepasswordService,

  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //Ambil EventEmitter with form value
    this.UpdateModel.token = String(localStorage.getItem("token"));
    this.UpdatepasswordService.UpdatePassword(this.UpdateModel)
    .subscribe(
      (resp : any) => {
      console.log(resp)
      // this.router.navigate(['/dashboard']);
    }, error => console.log('Error', error)
    )
     
  }
}

