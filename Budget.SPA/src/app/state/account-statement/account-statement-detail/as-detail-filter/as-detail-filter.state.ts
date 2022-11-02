import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FilterAsDetail } from 'app/model/filters/account-statement.filter';
import { DataInfo } from 'app/model/generics/detail-info.model';
import { EnumSelectType } from 'app/model/generics/select.model';
import { ReferentialService } from 'app/services/Referential/referential.service';
import { LoaderState } from 'app/state/_base/loader-state';
import { AsDetailFilterChangeOt, AsDetailFilterChangeOtf, ClearAsDetailFilter, LoadAsDetailFilter } from './as-detail-filter.action';


export class AsDetailFilterStateModel extends DataInfo<FilterAsDetail> {
    constructor() {
        super();
    }
}

const asDetailFilterStateModel = new AsDetailFilterStateModel();
@State<AsDetailFilterStateModel>({
    name: 'AsDetailFilter',
    defaults: asDetailFilterStateModel
})
@Injectable()
export class AsDetailFilterState extends LoaderState {
    constructor(
        private _asService: AsService,
        private _referentialService: ReferentialService
    ) {
        super();
    }

    @Selector()
    static get(state: AsDetailFilterStateModel): any { return state; }

    @Action(LoadAsDetailFilter)
    loadAsDetailFilter(context: StateContext<AsDetailFilterStateModel>, action: LoadAsDetailFilter): void {
        this.loading(context,'datas');

        // const state = context.getState();
        context.getState().datas = null;
        context.patchState(context.getState());

        this._asService.getDetailFilter(action.payload)
            .subscribe((result) => {
                const state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');
            });
    }

    @Action(ClearAsDetailFilter)
    clearAsDetailFilter(context: StateContext<AsDetailFilterStateModel>): void {
        context.setState(new AsDetailFilterStateModel());
    }


    //====================================
    //          Operation type family
    //====================================
    // Le changement d'operation type family implique le changement de la liste operation Type
    @Action(AsDetailFilterChangeOtf)
    asDetailFilterChangeOtf(context: StateContext<AsDetailFilterStateModel>, action: AsDetailFilterChangeOtf): void {
        this.loading(context,'otf');
        // const state = context.getState();
        context.getState().datas.operationType = [];
        context.patchState(context.getState());

        this._referentialService.operationTypeService.getSelectList(action.payload.id,EnumSelectType.inconnu)
            .subscribe((result)=> {
                const state = context.getState();
                state.datas.operationType = result;
                context.patchState(state);

                this.loaded(context,'otf');
            });
    }

    //====================================
    //          Operation type
    //====================================
    // Le changement d'operation type implique le changement de la liste operation
    @Action(AsDetailFilterChangeOt)
    asDetailFilterChangeOt(context: StateContext<AsDetailFilterStateModel>, action: AsDetailFilterChangeOt): void {
        this.loading(context,'ot');
        const state = context.getState();
        state.datas.operation = [];

        context.patchState(state);
        this._referentialService.operationService.getSelectList(action.payload.operationMethod.id,action.payload.operationType.id,EnumSelectType.inconnu)
            .subscribe((result)=> {
                // eslint-disable-next-line @typescript-eslint/no-shadow
                const state = context.getState();
                state.datas.operation = result;
                context.patchState(state);

                this.loaded(context,'ot');
            });
    }
}
