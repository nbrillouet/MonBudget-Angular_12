import { Directive } from '@angular/core';
import { Select } from '@corporate/model';

@Directive()
export class CommonDetailDirective {
    // currentIdOrdre: number = -1;

    constructor() { }

    compareObjects(o1: Select, o2: Select): any {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }
}
