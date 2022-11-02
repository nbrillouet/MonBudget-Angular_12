/* eslint-disable @typescript-eslint/no-shadow */
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FilterOtDetail } from 'app/model/filters/operation-type.filter';
import { DataInfo } from 'app/model/generics/detail-info.model';
import { OtService } from 'app/services/Referential/operation-type.service';
import { LoaderState } from 'app/state/_base/loader-state';
import { ClearOtDetailFilter, LoadOtDetailFilter } from './ot-detail-filter.action';

export class OtDetailFilterStateModel extends DataInfo<FilterOtDetail> {
    constructor() {
        super();
    }
}

const otDetailFilterStateModel = new OtDetailFilterStateModel();
@State<OtDetailFilterStateModel>({
    name: 'OtDetailFilter',
    defaults: otDetailFilterStateModel
})
@Injectable()
export class OtDetailFilterState extends LoaderState {
    constructor(
        private _otService: OtService
    ) {
        super();
    }

    @Selector() static get(state: OtDetailFilterStateModel): any { return state; }

    @Action(LoadOtDetailFilter)
    loadOtDetailFilter(context: StateContext<OtDetailFilterStateModel>, action: LoadOtDetailFilter): void {
        this.loading(context,'datas');

        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._otService.getForDetailFilter(action.payload)
            .subscribe((result) => {
                const state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');
            });
    }

    @Action(ClearOtDetailFilter)
    clearOtDetailFilter(context: StateContext<OtDetailFilterStateModel>): void {
        context.setState(new OtDetailFilterStateModel());
    }
}
