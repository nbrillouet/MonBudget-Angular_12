import { FilterOtfTableSelected } from 'app/model/filters/operation-type-family.filter';

export const OTF_TABLE_CHANGE = 'otf-table-change';

export class ChangeOtfTable {
    static readonly type = OTF_TABLE_CHANGE;

    constructor(public payload: FilterOtfTableSelected) { }
}

// export const OTF_TABLE_LOAD = 'otf-table-load';
// export const OTF_TABLE_CLEAR = 'otf-table-clear';

// export class LoadOtfTable {
//     static readonly type = OTF_TABLE_LOAD;

//     constructor(public payload: any) { }
// }

// export class ClearOtfTable {
//     static readonly type = OTF_TABLE_CLEAR;
// }
