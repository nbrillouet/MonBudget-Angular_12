/* eslint-disable @typescript-eslint/no-shadow */
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FilterOtfDetail } from 'app/model/filters/operation-type-family.filter';
import { DataInfo } from 'app/model/generics/detail-info.model';
import { OtfService } from 'app/services/Referential/operation-type-family.service';
import { LoaderState } from 'app/state/_base/loader-state';
import { ClearOtfDetailFilter, LoadOtfDetailFilter } from './otf-detail-filter.action';

export class OtfDetailFilterStateModel extends DataInfo<FilterOtfDetail> {
    constructor() {
        super();
    }
}

const otfDetailFilterStateModel = new OtfDetailFilterStateModel();
@State<OtfDetailFilterStateModel>({
    name: 'OtfDetailFilter',
    defaults: otfDetailFilterStateModel
})
@Injectable()
export class OtfDetailFilterState extends LoaderState {
    constructor(
        private _otfService: OtfService
    ) {
        super();
    }

    @Selector() static get(state: OtfDetailFilterStateModel): any { return state; }

    @Action(LoadOtfDetailFilter)
    loadOtfDetailFilter(context: StateContext<OtfDetailFilterStateModel>, action: LoadOtfDetailFilter): void {
        this.loading(context,'datas');

        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._otfService.getForDetailFilter(action.payload)
            .subscribe((result) => {
                const state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');
            });
    }

    @Action(ClearOtfDetailFilter)
    clearOtfDetailFilter(context: StateContext<OtfDetailFilterStateModel>): void {
        context.setState(new OtfDetailFilterStateModel());
    }
}
