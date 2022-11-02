import { Select, SelectYear } from '../select/select.model';

export class MonthYear {
    month: Select = null;
    year: number = null;
}

export class MonthYearComposed {
    month: Select;
    year: SelectYear;
}

export class DateTimeFactory {

    public static get getMonths(): Select[] {
        return [
            {id:1,label:'Jan'},
            {id:2,label:'Fev'},
            {id:3,label:'Mar'},
            {id:4,label:'Avr'},
            {id:5,label:'Mai'},
            {id:6,label:'Jui'},
            {id:7,label:'Jui'},
            {id:8,label:'Aou'},
            {id:9,label:'Sep'},
            {id:10,label:'Oct'},
            {id:11,label:'Nov'},
            {id:12,label:'Dec'}
        ];
    };
}
