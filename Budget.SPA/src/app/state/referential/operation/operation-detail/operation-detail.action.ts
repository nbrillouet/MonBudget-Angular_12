import { FilterForDetail } from 'app/model/filters/shared/filterDetail.filter';
import { OperationForDetail } from 'app/model/referential/operation.model';

export const OPERATION_DETAIL_LOAD = 'operation-detail-load';
export const OPERATION_DETAIL_SYNCHRONIZE = 'operation-detail-synchronize';
export const OPERATION_DETAIL_CLEAR = 'operation-detail-clear';

export class LoadOperationDetail {
    static readonly type = OPERATION_DETAIL_LOAD;

    constructor(public payload: FilterForDetail) { }
}

export class SynchronizeOperationDetail {
    static readonly type = OPERATION_DETAIL_SYNCHRONIZE;

    constructor(public payload: OperationForDetail) { }
}

export class ClearOperationDetail {
    static readonly type = OPERATION_DETAIL_CLEAR;
}

