import { Injectable } from '@angular/core';
import { Datas } from '@corporate/model';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { OForTable } from 'app/model/referential/operation.model';
import { LoaderState } from 'app/state/_base/loader-state';
import { finalize } from 'rxjs';
import { OApiService } from '../o.api.service';
import { ChangeOTableFilterSelectedPagination } from './operation-table-filter-selected/operation-table-filter-selected.action';
import { ChangeOTable } from './operation-table.action';

export class OTableStateModel extends Datas<OForTable[]> {
    constructor() {
        super();
    }
}

const oTableStateModel = new OTableStateModel();

@State<OTableStateModel>({
    name: 'OTable',
    defaults : oTableStateModel
})

@Injectable()
export class OTableState extends LoaderState {
    constructor(
        private _oApiService: OApiService,
        private _store: Store
    ) {
        super();
    }

    @Selector()
    static get(state: OTableStateModel): any { return state; }

    @Action(ChangeOTable)
    changeOTable(context: StateContext<OTableStateModel>, action: ChangeOTable): void {
        this.loading(context,'datas');

        context.patchState({
            datas: null
        });

        //Prerequis pour appel back: le main doit etre renseigné
        //user / idAccount /  monthYear / isWithItTransfer
        if(action.payload.user) {
            this._oApiService.getOTable(action.payload)
                .pipe(finalize(()=> {this.loaded(context,'datas');}))
                .subscribe(
                    (result) => {
                        //remplacement des assets
                        result.datas.forEach((data: OForTable) => {
                            // data.asset.code = this._assetService.get(data.asset.code);
                            // data.buttonOt = {label:'(250)', tooltip: 'types opérations', icon: 'more_horiz', color: 'primary' } as TypeButtonIcon;
                            // data.buttonDetail = {label:'...', tooltip: 'détail catégorie opération', icon: 'more_horiz', color: 'primary' } as TypeButtonIcon;
                        });

                        context.patchState({
                            datas: result.datas
                        });

                        this._store.dispatch(new ChangeOTableFilterSelectedPagination(result.pagination));
                    }
                );
        }
    }
}
// import { Injectable } from '@angular/core';
// import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
// import { Datas } from 'app/model/generics/detail-info.model';
// import { OperationTable } from 'app/model/referential/operation.model';
// import { OperationService } from 'app/services/Referential/operation.service';
// import { LoaderState } from 'app/state/_base/loader-state';
// import { UpdateOperationTableFilterSelectedByProperties } from './operation-table-filter-selected/operation-table-filter-selected.action';
// import { ClearOperationTable, LoadOperationTable } from './operation-table.action';

// export class OperationTableStateModel extends Datas<OperationTable[]> {
//     constructor () {
//         super();
//     }
// }

// const tableInfo = new OperationTableStateModel();
// @State<OperationTableStateModel>({
//     name: 'OperationTable',
//     defaults : tableInfo
// })

// @Injectable()
// export class OperationTableState extends LoaderState {
//     constructor(
//         private _operationService: OperationService,
//         private _store: Store) {
//             super();
//     }

//     @Selector() static get(state: OperationTableStateModel): any { return state; }

//     @Action(LoadOperationTable)
//     loadOperationTable(context: StateContext<OperationTableStateModel>, action: LoadOperationTable): void {
//         this.loading(context,'datas');

//         context.patchState({
//             datas: null
//         });

//         this._operationService.getOperationTable(action.payload)
//             .subscribe((result)=> {
//                 context.patchState({
//                     datas: result.datas
//                 });

//                 this._store.dispatch(new UpdateOperationTableFilterSelectedByProperties({properties: [ { name:'pagination', value: result.pagination} ] }));

//                 this.loaded(context,'datas');
//             });
//     }

//     @Action(ClearOperationTable)
//     clearOperationTable(context: StateContext<OperationTableStateModel>): void {
//         context.setState(new OperationTableStateModel());
//     }
// }
