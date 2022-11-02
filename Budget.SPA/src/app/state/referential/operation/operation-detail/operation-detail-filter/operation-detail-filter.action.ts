import { OperationForDetail } from 'app/model/referential/operation.model';

export const OPERATION_DETAIL_FILTER_LOAD = 'operation-detail--filter-load';
export const OPERATION_DETAIL_FILTER_CLEAR = 'operation-detail-filter-clear';

export class LoadOperationDetailFilter {
    static readonly type = OPERATION_DETAIL_FILTER_LOAD;

    constructor(public payload: OperationForDetail) { }
}

export class ClearOperationDetailFilter {
    static readonly type = OPERATION_DETAIL_FILTER_CLEAR;
}
