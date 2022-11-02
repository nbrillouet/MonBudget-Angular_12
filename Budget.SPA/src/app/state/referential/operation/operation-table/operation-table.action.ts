import { FilterOTableSelected } from 'app/model/filters/operation.filter';

export const O_TABLE_CHANGE = 'o-table-change';

export class ChangeOTable {
    static readonly type = O_TABLE_CHANGE;

    constructor(public payload: FilterOTableSelected) { }
}

// export const OPERATION_TABLE_LOAD = 'operation-table-load';
// export const OPERATION_TABLE_CLEAR = 'operation-table-clear';

// export class LoadOperationTable {
//     static readonly type = OPERATION_TABLE_LOAD;

//     constructor(public payload: any) { }
// }

// export class ClearOperationTable {
//     static readonly type = OPERATION_TABLE_CLEAR;
// }
