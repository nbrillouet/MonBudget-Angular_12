import { FilterForDetail } from 'app/model/filters/shared/filterDetail.filter';
import { OtfForDetail } from 'app/model/referential/operation-type-family.model';

export const OTF_DETAIL_LOAD = 'otf-detail-load';
export const OTF_DETAIL_SYNCHRONIZE = 'otf-detail-synchronize';
export const OTF_DETAIL_CLEAR = 'otf-detail-clear';

export class LoadOtfDetail {
    static readonly type = OTF_DETAIL_LOAD;

    constructor(public payload: FilterForDetail) { }
}

export class SynchronizeOtfDetail {
    static readonly type = OTF_DETAIL_SYNCHRONIZE;

    constructor(public payload: OtfForDetail) { }
}

export class ClearOtfDetail {
    static readonly type = OTF_DETAIL_CLEAR;
}

