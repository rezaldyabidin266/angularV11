import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCounter'
})
export class FilterCounterPipe implements PipeTransform {

  transform(value: any, input: string) {
    if (input) {
        input = input.toLowerCase();
        return value.filter(function (el: any) {
            return el.keterangan.toLowerCase().indexOf(input) > -1;
        })
    }
    return value;
}

}
