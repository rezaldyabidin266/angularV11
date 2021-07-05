import { Pipe, PipeTransform } from '@angular/core';
import { Product} from '../app/product'

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {
  // transform(prodcut: any, searchText: any): any {
  //   if(searchText == null) return prodcut;

  //   return prodcut.filter(function(prodcut: { nama: string; }){
  //     return prodcut.nama.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
  //   })
  // }
  transform(value: any, input: string) {
    if (input) {
        input = input.toLowerCase();
        return value.filter(function (el: any) {
            return el.nama.toLowerCase().indexOf(input) > -1;
        })
    }
    return value;
}
}
