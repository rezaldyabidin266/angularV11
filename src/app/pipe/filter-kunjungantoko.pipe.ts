import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterKunjungantoko'
})
export class FilterKunjungantokoPipe implements PipeTransform {

  transform(value: any, input: string) {
    if (input) {
        input = input.toLowerCase();
        return value.filter(function (el: any) {
            return el.asset.toLowerCase().indexOf(input) > -1;
        })
    }
    return value;
}

}
