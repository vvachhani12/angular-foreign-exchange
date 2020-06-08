import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**** creating custom Pipe to enlarge the decimal value ****/
@Pipe({
    name: 'enlargeDecimal',
})

export class EnlargeDecimal implements PipeTransform {

    /**** Creating an instance of DomSanitizer ****/
    constructor(private sanitizer: DomSanitizer) {}

    /**** Default transform method that takes the value passed in ****/
    transform(value: string): any {

        /**** slicing the string to get the 3rd and 4th decimal value ****/
        const str1 = value.slice(0, -3);
        const str2 = value.slice(-3, -1);
        const str3 = value.slice(-1);

        /**** 
        creating a new html element with 3 separate row and then will enlarge
        the middle row which contains the 3rd and the 4th decimal
        ****/
        const newStr = this.sanitizer.bypassSecurityTrustHtml(`
        <div class="container">
            <div class="row">
                <div class="col" style="padding-right: 0px; text-align: right">
                    ${str1}
                </div>
                <div class="col str2">
                    <h1>${str2}</h1>
                </div>
                <div class="col" style="padding-left: 0px; text-align: left">
                    ${str3}
                </div>
            </div>
        </div>
        `);
        
        return newStr;
    }
}