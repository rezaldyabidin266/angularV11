import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDetailhistory'
})
export class FilterDetailhistoryPipe implements PipeTransform {

  transform(value: any, input: string) {
    if (input) {
        input = input.toLowerCase();
        return value.filter(function (el: any) {
            return el.selisih.toLowerCase().indexOf(input) > -1;
        })
    }
    return value;
}



}
