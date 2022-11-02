/* eslint-disable @typescript-eslint/no-shadow */
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FilterForDetail } from 'app/model/filters/shared/filterDetail.filter';
import { DetailInfo } from 'app/model/generics/detail-info.model';
import { OperationForDetail } from 'app/model/referential/operation.model';
import { OperationService } from 'app/services/Referential/operation.service';
import { LoaderState } from 'app/state/_base/loader-state';
import { LoadOperationDetailFilter } from './operation-detail-filter/operation-detail-filter.action';
import { ClearOperationDetail, LoadOperationDetail, SynchronizeOperationDetail } from './operation-detail.action';

export class OperationDetailStateModel extends DetailInfo<OperationForDetail, FilterForDetail> {
    constructor () {
        super();
        this.filter = new FilterForDetail();
    }
}

const detailInfo = new OperationDetailStateModel();
@State<OperationDetailStateModel>({
    name: 'OperationDetail',
    defaults : detailInfo
})
@Injectable()
export class OperationDetailState extends LoaderState {
    constructor(
        private _operationService: OperationService
    )
    {
        super();

    }

    @Selector() static get(state: OperationDetailStateModel): any { return state;  }
    @Selector() static getFilter(state: OperationDetailStateModel): any { return state.filter; }

    @Action(LoadOperationDetail)
    loadOperationDetail(context: StateContext<OperationDetailStateModel>, action: LoadOperationDetail): void {

        this.loading(context,'datas');
        const state = context.getState();

        state.filter = action.payload;
        state.datas = null;

        context.patchState(state);

        this._operationService.getForDetail(action.payload)
            .subscribe((result)=> {
                const state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');

                //chargement des filtres associés
                context.dispatch(new LoadOperationDetailFilter(state.datas));
            });
    }

    @Action(SynchronizeOperationDetail)
    synchronizeOperationDetail(context: StateContext<OperationDetailStateModel>, action: SynchronizeOperationDetail): void {
        context.patchState(context.getState());
    }

    @Action(ClearOperationDetail)
    clearOperationDetail(context: StateContext<OperationDetailStateModel>): void {
        context.setState(new OperationDetailStateModel());
    }
}
