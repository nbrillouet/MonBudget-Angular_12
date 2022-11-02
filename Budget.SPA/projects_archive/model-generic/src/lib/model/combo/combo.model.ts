import { Select, SelectNameValue } from '../select/select.model';

export class ComboSimple<T> {
    list: T[];
    selected: Select;

    constructor() {
        this.list=null;
        this.selected=null;
    }
}

export class ComboMultiple<T> {
    list: T[];
    listSelected: Select[];

    constructor() {
        this.list=null;
        this.listSelected=null;
    }
}

export class ComboNameValueMultiple<T,U> {
    list: T[];
    listSelected: SelectNameValue<U>[];
}

