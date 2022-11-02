/* eslint-disable @typescript-eslint/no-shadow */
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FilterForDetail } from 'app/model/filters/shared/filterDetail.filter';
import { DetailInfo } from 'app/model/generics/detail-info.model';
import { OtfForDetail } from 'app/model/referential/operation-type-family.model';
import { OtfService } from 'app/services/Referential/operation-type-family.service';
import { LoaderState } from 'app/state/_base/loader-state';
import { LoadOtfDetailFilter } from './otf-detail-filter/otf-detail-filter.action';
import { ClearOtfDetail, LoadOtfDetail, SynchronizeOtfDetail } from './otf-detail.action';

export class OtfDetailStateModel extends DetailInfo<OtfForDetail, FilterForDetail> {
    constructor () {
        super();
        this.filter = new FilterForDetail();
    }
}

const detailInfo = new OtfDetailStateModel();
@State<OtfDetailStateModel>({
    name: 'OtfDetail',
    defaults : detailInfo
})
@Injectable()
export class OtfDetailState extends LoaderState {
    constructor(
        private _otfService: OtfService
    )
    {
        super();

    }

    @Selector() static get(state: OtfDetailStateModel): any { return state;  }
    @Selector() static getFilter(state: OtfDetailStateModel): any { return state.filter; }

    @Action(LoadOtfDetail)
    loadOtfDetail(context: StateContext<OtfDetailStateModel>, action: LoadOtfDetail): void {

        this.loading(context,'datas');
        const state = context.getState();

        state.filter = action.payload;
        state.datas = null;

        context.patchState(state);

        this._otfService.getForDetail(action.payload)
            .subscribe((result)=> {
                const state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');

                //chargement des filtres associés
                context.dispatch(new LoadOtfDetailFilter(state.datas));
            });
    }

    @Action(SynchronizeOtfDetail)
    synchronizeOtfDetail(context: StateContext<OtfDetailStateModel>, action: SynchronizeOtfDetail): void {
        const state = context.getState();
        context.patchState(state);
    }

    @Action(ClearOtfDetail)
    clearOtfDetail(context: StateContext<OtfDetailStateModel>): void {
        context.setState(new OtfDetailStateModel());
    }
}
