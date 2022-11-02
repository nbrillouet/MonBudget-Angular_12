import { Injectable } from '@angular/core';
import { FilterSelected } from '@corporate/model';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { FilterOTableSelected } from 'app/model/filters/operation.filter';
import { LoaderState } from 'app/state/_base/loader-state';
import { ChangeOTable } from '../operation-table.action';
import { ChangeOTableFilterSelected, ChangeOTableFilterSelectedPagination } from './operation-table-filter-selected.action';

export class OTableFilterSelectedStateModel extends FilterSelected<FilterOTableSelected> {
    constructor() {
        super(FilterOTableSelected);
    }
}

const oTableFilterSelectedStateModel = new OTableFilterSelectedStateModel();

@State<OTableFilterSelectedStateModel>({
    name: 'OTableFilterSelected',
    defaults : oTableFilterSelectedStateModel
})

@Injectable()
export class OTableFilterSelectedState extends LoaderState {
    constructor(
        private _store: Store
        ) {
            super();
    }

    @Selector()
    static get(state: OTableFilterSelectedStateModel): any { return state; }


    @Action(ChangeOTableFilterSelected)
    changeOTableFilterSelected(context: StateContext<OTableFilterSelectedStateModel>, action: ChangeOTableFilterSelected): void {
        debugger;
        this.loading(context,'filter-selected');

        context.patchState({
            selected: action.payload
        });

        this._store.dispatch(new ChangeOTable(action.payload));

        this.loaded(context,'filter-selected');
    }

    @Action(ChangeOTableFilterSelectedPagination)
    changeOTableFilterSelectedPagination(context: StateContext<OTableFilterSelectedStateModel>, action: ChangeOTableFilterSelectedPagination): void {
        this.loading(context,'filter-selected-pagination');

        context.patchState({
            selected: {
                ...context.getState().selected,
                pagination: action.payload
            }
        });

        this.loaded(context,'filter-selected-pagination');
    }
}

// import { Injectable } from '@angular/core';
// import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
// import { FilterOperationTableSelected } from 'app/model/filters/operation.filter';
// import { FilterSelected } from 'app/model/generics/filter.info.model';
// import { HelperService } from 'app/services/helper.service';
// import { LoaderState } from 'app/state/_base/loader-state';
// import { LoadOperationTable } from '../operation-table.action';
// import { UpdateOperationTableFilterSelected, UpdateOperationTableFilterSelectedByProperties } from './operation-table-filter-selected.action';

// export class OperationTableFilterSelectedStateModel extends FilterSelected<FilterOperationTableSelected> {
//     constructor() {
//         super(FilterOperationTableSelected);
//     }
// }

// const operationTableFilterSelectedStateModel = new OperationTableFilterSelectedStateModel();

// @State<OperationTableFilterSelectedStateModel>({
//     name: 'OperationTableFilterSelected',
//     defaults : operationTableFilterSelectedStateModel
// })

// @Injectable()
// export class OperationTableFilterSelectedState extends LoaderState {
//     constructor(
//         private _store: Store,
//         private _helperService: HelperService
//         ) {
//             super();
//     }

//     @Selector() static get(state: OperationTableFilterSelectedStateModel): any { return state; }

//     @Action(UpdateOperationTableFilterSelectedByProperties)
//     updateOperationTableFilterSelectedByProperties(context: StateContext<OperationTableFilterSelectedStateModel>, action: UpdateOperationTableFilterSelectedByProperties): void {
//         this.loading(context,'filter-selected');

//         let selected: FilterOperationTableSelected;

//         selected = this._helperService.getDeepClone(context.getState().selected);
//         selected.isPaginationUpdate = false;

//         action.payload.properties.forEach( (property) => {
//             selected = this._helperService.setDeepProperty(selected,property.name,property.value);
//             if(property.name==='pagination') {
//                 selected.isPaginationUpdate=true;
//             }
//         });

//         this.updateOperationTableFilterSelectedCommon(selected, context);
//     }

//     @Action(UpdateOperationTableFilterSelected)
//     updateOperationTableFilterSelected(context: StateContext<OperationTableFilterSelectedStateModel>, action: UpdateOperationTableFilterSelected): void {
//         this.loading(context,'filter-selected');

//         const selected: FilterOperationTableSelected = action.payload;
//         selected.isPaginationUpdate = false;

//         this.updateOperationTableFilterSelectedCommon(selected, context);

//     }

//     updateOperationTableFilterSelectedCommon(selected: FilterOperationTableSelected, context: StateContext<OperationTableFilterSelectedStateModel>): void {
//         //user
//         selected.user = selected.user == null ? this._helperService.getUserForGroupFromStorage() : selected.user;

//         context.patchState({ selected: selected });

//         this.loaded(context,'filter-selected');

//         //Pagination est donnée par la table
//         if(!selected.isPaginationUpdate) {
//             this._store.dispatch(new LoadOperationTable(context.getState().selected));
//         }
//     }
// }
