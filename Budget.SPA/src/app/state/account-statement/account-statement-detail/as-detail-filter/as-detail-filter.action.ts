import { AsForDetail } from 'app/model/account-statement/account-statement-detail.model';
import { FilterOperationType } from 'app/model/filters/operation.filter';
import { ISelect } from 'app/model/generics/select.model';

export const AS_DETAIL_FILTER_LOAD = 'as-detail--filter-load';
export const AS_DETAIL_FILTER_CLEAR = 'as-detail-filter-clear';
export const AS_DETAIL_FILTER_CHANGE_OTF = 'as-detail-filter-change-otf';
export const AS_DETAIL_FILTER_CHANGE_OT = 'as-detail-filter-change-ot'

export class LoadAsDetailFilter {
    static readonly type = AS_DETAIL_FILTER_LOAD;

    constructor(public payload: AsForDetail) { }
}

export class ClearAsDetailFilter {
    static readonly type = AS_DETAIL_FILTER_CLEAR;
}

//CHANGE OPERATION TYPE FAMILY//
export class AsDetailFilterChangeOtf {
    static readonly type = AS_DETAIL_FILTER_CHANGE_OTF;
    constructor(public payload: ISelect) { }
}

//CHANGE OPERATION TYPE//
export class AsDetailFilterChangeOt {
    static readonly type = AS_DETAIL_FILTER_CHANGE_OT;
    constructor(public payload: FilterOperationType) { }
}
