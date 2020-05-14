import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'itemsfilter'
})
export class ItemsFilterPipe implements PipeTransform {

    
    transform(accounts: any, phrase: string) {
        //console.log(phrase);

        if (phrase === undefined || phrase == '') return accounts;

        if (phrase) {
            phrase = phrase.toLowerCase();
            return accounts.filter(function (el: any) {
                let label  = el.Name || el.Text;
                return label.toLowerCase().indexOf(phrase) > -1;
            })
        }
        return phrase;
    }
}