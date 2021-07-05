import { Component, OnInit } from '@angular/core';

//Interface login
import { Product } from '../product';

//Service
import { ProductService } from '../product.service';

//pipe
import { FilterProductPipe } from '../filter-product.pipe'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  providers: [ FilterProductPipe ],
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
  productData = new Product('');
  productDataTable:any = [];
  
  long:any = [];
  lat:any = [];
  items: any;

  public queryString:any;
  p :number = 1;
  c :number = 1;
  constructor(
    private ProductService : ProductService,
    private productPipe : FilterProductPipe

  ) { }

  ngOnInit(): void {
    this.RequestRefreshData();
  }

  
  RequestRefreshData(){
    this.productData.token = String(localStorage.getItem("token"));
    //Ambil EventEmitter with form value
    this.ProductService.PostData(this.productData)
    .subscribe(
      (resp : any) => {
   
      this.productDataTable = resp;
      

      for(let rensponse of resp){
        let map = (document.getElementById('map'));
        this.long = rensponse.longitude;
        this.lat = rensponse.latitude;
        
      }
    

    }, error => console.log('Error', error)
    )
     
  }

//   assignCopy(){
//     this.productDataTable = Object.assign([], this.productDataTable);
//  }

//  filterItem(value: string){
//    console.log(value)
//   if(!value){
//       this.assignCopy();
//   } // when nothing has typed
//   this.productDataTable = Object.assign([], this.productDataTable).filter(
//     (res: any) => res.nama.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > - 1
//   )
// }

  // search(){
  //   if(this.nama == null) return this.productDataTable;
  //     this.productDataTable = this.productDataTable.filter((res: any) =>{
       
  //        return res.nama.toLowerCase().indexOf(this.nama.toLowerCase()) > -1;
  //     })
  // }

//   search(): void {
//     let term = this.nama;
//     this.productDataTable = this.productDataTable.filter(function(tag: { nama: string | any[]; }) {
//         return tag.nama.indexOf(term) >= 0;
//     }); 
// }

}
