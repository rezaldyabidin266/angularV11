import { Component, OnInit } from '@angular/core';

//interface
import { HistoryLogin } from '../historylogin';

//service
import { HistoryloginService } from '../historylogin.service';

@Component({
  selector: 'app-historylogin',
  templateUrl: './historylogin.component.html',
  styleUrls: ['./historylogin.component.css']
})
export class HistoryloginComponent implements OnInit {

  //Token
  HistoryToken  = new HistoryLogin(''); 

  //Data rensponse
  HistoryData:any = [];

  public queryString:any;
  p :number = 1;
  c :number = 1;

  constructor(
    private HistoryloginService : HistoryloginService,
  ) { }

  ngOnInit(): void {
    this.RefreshData()
  }

  RefreshData(){
    this.HistoryToken.token = String(localStorage.getItem("token"));
    //Ambil EventEmitter with form value
    console.log(this.HistoryToken)
        //Ambil EventEmitter with form value
        this.HistoryloginService.PostData(this.HistoryToken)
        .subscribe(
          (resp : any) => {
       
        
          this.HistoryData = resp;
    
          for(let rensponse of resp){  
      
          }
        
    
        }, error => console.log('Error', error)
        )

  }

}
