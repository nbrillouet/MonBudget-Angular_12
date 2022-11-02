/* eslint-disable @typescript-eslint/no-shadow */
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FilterForDetail } from 'app/model/filters/shared/filterDetail.filter';
import { DetailInfo } from 'app/model/generics/detail-info.model';
import { OtForDetail } from 'app/model/referential/operation-type.model';
import { OtService } from 'app/services/Referential/operation-type.service';
import { LoaderState } from 'app/state/_base/loader-state';
import { LoadOtDetailFilter } from './ot-detail-filter/ot-detail-filter.action';
import { ClearOtDetail, LoadOtDetail, SynchronizeOtDetail } from './ot-detail.action';


export class OtDetailStateModel extends DetailInfo<OtForDetail, FilterForDetail> {
    constructor() {
        super();
        this.filter = new FilterForDetail();
    }
}

const detailInfo = new OtDetailStateModel();
@State<OtDetailStateModel>({
    name: 'OtDetail',
    defaults : detailInfo
})
@Injectable()
export class OtDetailState extends LoaderState {
    constructor(
        private _otService: OtService
    )
    {
        super();
    }

    @Selector() static get(state: OtDetailStateModel): any { return state;  }
    @Selector() static getFilter(state: OtDetailStateModel): any { return state.filter; }

    @Action(LoadOtDetail)
    loadOtDetail(context: StateContext<OtDetailStateModel>, action: LoadOtDetail): void {

        this.loading(context,'datas');
        const state = context.getState();

        state.filter = action.payload;
        state.datas = null;

        context.patchState(state);

        this._otService.getForDetail(action.payload)
            .subscribe((result)=> {
                const state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');

                //chargement des filtres associés
                context.dispatch(new LoadOtDetailFilter(state.datas));
            });
    }

    @Action(SynchronizeOtDetail)
    synchronizeOtDetail(context: StateContext<OtDetailStateModel>, action: SynchronizeOtDetail): void {
        const state = context.getState();
        context.patchState(state);
    }

    @Action(ClearOtDetail)
    clearOtDetail(context: StateContext<OtDetailStateModel>): void {
        context.setState(new OtDetailStateModel());
    }
}
