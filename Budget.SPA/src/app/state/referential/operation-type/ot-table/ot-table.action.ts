import { FilterOtTableSelected } from 'app/model/filters/operation-type.filter';

export const OT_TABLE_CHANGE = 'ot-table-change';

export class ChangeOtTable {
    static readonly type = OT_TABLE_CHANGE;

    constructor(public payload: FilterOtTableSelected) { }
}


// export const OT_TABLE_LOAD = 'ot-table-load';
// export const OT_TABLE_CLEAR = 'ot-table-clear';

// export class LoadOtTable {
//     static readonly type = OT_TABLE_LOAD;

//     constructor(public payload: any) { }
// }

// export class ClearOtTable {
//     static readonly type = OT_TABLE_CLEAR;
// }
