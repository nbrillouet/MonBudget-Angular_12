/* eslint-disable @typescript-eslint/no-shadow */
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AsForDetail } from 'app/model/account-statement/account-statement-detail.model';
import { FilterForDetail } from 'app/model/filters/shared/filterDetail.filter';
import { DetailInfo } from 'app/model/generics/detail-info.model';
import { LoaderState } from 'app/state/_base/loader-state';
import { LoadAsDetailFilter } from './as-detail-filter/as-detail-filter.action';
import { ClearAsDetail, LoadAsDetail, SynchronizeAsDetail } from './as-detail.action';

export class AsDetailStateModel extends DetailInfo<AsForDetail, FilterForDetail> {
    constructor () {
        super();
        this.filter = new FilterForDetail();
    }
}

const detailInfo = new AsDetailStateModel();
@State<AsDetailStateModel>({
    name: 'AsDetail',
    defaults : detailInfo
})
@Injectable()
export class AsDetailState extends LoaderState {
    constructor(
        private _asService: AsService
    )
    {
        super();

    }

    //fonction delay (test asynchro)
    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    // }

    @Selector() static get(state: AsDetailStateModel): any { return state;  }
    @Selector() static getFilter(state: AsDetailStateModel): any { return state.filter; }

    @Action(LoadAsDetail)
    loadAsDetail(context: StateContext<AsDetailStateModel>, action: LoadAsDetail): void {

        this.loading(context,'datas');
        const state = context.getState();

        state.filter = action.payload;
        state.datas = null;

        context.patchState(state);

        this._asService.getForDetail(action.payload)
            .subscribe((result)=> {
                const state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');

                //chargement des filtres associés
                context.dispatch(new LoadAsDetailFilter(state.datas));
            });
    }

    @Action(SynchronizeAsDetail)
    synchronizeAsDetail(context: StateContext<AsDetailStateModel>, action: SynchronizeAsDetail): void {
        const state = context.getState();
        context.patchState(state);
    }

    @Action(ClearAsDetail)
    clearAsDetail(context: StateContext<AsDetailStateModel>): void {
        context.setState(new AsDetailStateModel());
    }
}
