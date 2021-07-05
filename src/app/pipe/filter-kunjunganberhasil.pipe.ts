import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterKunjunganberhasil'
})
export class FilterKunjunganberhasilPipe implements PipeTransform {

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
