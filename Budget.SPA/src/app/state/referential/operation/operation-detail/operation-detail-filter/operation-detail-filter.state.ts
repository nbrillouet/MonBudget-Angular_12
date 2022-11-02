/* eslint-disable @typescript-eslint/no-shadow */
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FilterOperationDetail } from 'app/model/filters/operation.filter';
import { DataInfo } from 'app/model/generics/detail-info.model';
import { OperationService } from 'app/services/Referential/operation.service';
import { LoaderState } from 'app/state/_base/loader-state';
import { ClearOperationDetailFilter, LoadOperationDetailFilter } from './operation-detail-filter.action';

export class OperationDetailFilterStateModel extends DataInfo<FilterOperationDetail> {
    constructor() {
        super();
    }
}

const operationDetailFilterStateModel = new OperationDetailFilterStateModel();
@State<OperationDetailFilterStateModel>({
    name: 'OperationDetailFilter',
    defaults: operationDetailFilterStateModel
})
@Injectable()
export class OperationDetailFilterState extends LoaderState {
    constructor(
        private _operationService: OperationService
    ) {
        super();
    }

    @Selector() static get(state: OperationDetailFilterStateModel): any { return state; }

    @Action(LoadOperationDetailFilter)
    loadOperationDetailFilter(context: StateContext<OperationDetailFilterStateModel>, action: LoadOperationDetailFilter): void {
        this.loading(context,'datas');

        const state = context.getState();
        state.datas = null;
        context.patchState(state);

        this._operationService.getDetailFilter(action.payload)
            .subscribe((result) => {
                const state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');
            });
    }

    @Action(ClearOperationDetailFilter)
    clearOperationDetailFilter(context: StateContext<OperationDetailFilterStateModel>): void {
        context.setState(new OperationDetailFilterStateModel());
    }
}
