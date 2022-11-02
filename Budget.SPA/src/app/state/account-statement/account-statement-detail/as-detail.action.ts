import { AsForDetail } from 'app/model/account-statement/account-statement-detail.model';
import { FilterForDetail } from 'app/model/filters/shared/filterDetail.filter';

export const AS_DETAIL_LOAD = 'as-detail-load';
export const AS_DETAIL_SYNCHRONIZE = 'as-detail-synchronize';
export const AS_DETAIL_CLEAR = 'as-detail-clear';

export class LoadAsDetail {
    static readonly type = AS_DETAIL_LOAD;

    constructor(public payload: FilterForDetail) { }
}

export class SynchronizeAsDetail {
    static readonly type = AS_DETAIL_SYNCHRONIZE;

    constructor(public payload: AsForDetail) { }
}

export class ClearAsDetail {
    static readonly type = AS_DETAIL_CLEAR;
}
