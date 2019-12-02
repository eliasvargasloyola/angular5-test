import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any): any {
    let charPhone: Array<string> = Array.from(value);
    return charPhone.slice(0, 2).toString().replace(new RegExp(',', 'g'), "") + ' - ' + charPhone.slice(2, 4).toString().replace(new RegExp(',', 'g'), "") + ' - ' + charPhone.slice(4, 7).toString().replace(new RegExp(',', 'g'), "") + ' - ' + charPhone.slice(7, charPhone.length).toString().replace(new RegExp(',', 'g'), "");
  }

}
