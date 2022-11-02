import { Injectable } from '@angular/core';
import { TypeButtonIcon } from '@corporate/mat-table-filter';
import { Datas } from '@corporate/model';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { OtForTable } from 'app/model/referential/operation-type.model';
import { LoaderState } from 'app/state/_base/loader-state';
import { finalize } from 'rxjs';
import { OtApiService } from '../ot.api.service';
import { ChangeOtTableFilterSelectedPagination } from './ot-table-filter-selected/ot-table-filter-selected.action';
import { ChangeOtTable } from './ot-table.action';

export class OtTableStateModel extends Datas<OtForTable[]> {
    constructor() {
        super();
    }
}

const otTableStateModel = new OtTableStateModel();

@State<OtTableStateModel>({
    name: 'OtTable',
    defaults : otTableStateModel
})

@Injectable()
export class OtTableState extends LoaderState {
    constructor(
        private _otApiService: OtApiService,
        private _store: Store,
        // private _assetService: AssetService
    ) {
        super();
    }

    @Selector()
    static get(state: OtTableStateModel): any { return state; }

    @Action(ChangeOtTable)
    changeOtTable(context: StateContext<OtTableStateModel>, action: ChangeOtTable): void {
        this.loading(context,'datas');

        context.patchState({
            datas: null
        });

        //Prerequis pour appel back: le main doit etre renseigné
        //user / idAccount /  monthYear / isWithItTransfer
        if(action.payload.user) {
            this._otApiService.getOtTable(action.payload)
                .pipe(finalize(()=> {this.loaded(context,'datas');}))
                .subscribe(
                    (result) => {
                        //remplacement des assets
                        result.datas.forEach((data: OtForTable) => {
                            data.buttonO = {label:'(250)', tooltip: 'opérations', icon: 'more_horiz', color: 'primary' } as TypeButtonIcon;
                            data.buttonDetail = {label:'...', tooltip: 'détail opération', icon: 'more_horiz', color: 'primary' } as TypeButtonIcon;
                        });

                        context.patchState({
                            datas: result.datas
                        });

                        this._store.dispatch(new ChangeOtTableFilterSelectedPagination(result.pagination));
                    }
                );
        }
    }
}

// import { Injectable } from '@angular/core';
// import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
// import { Datas } from 'app/model/generics/detail-info.model';
// import { OtTable } from 'app/model/referential/operation-type.model';
// import { OtService } from 'app/services/Referential/operation-type.service';
// import { LoaderState } from 'app/state/_base/loader-state';
// import { UpdateOtTableFilterSelectedByProperties } from './ot-table-filter-selected/ot-table-filter-selected.action';
// import { ClearOtTable, LoadOtTable } from './ot-table.action';

// export class OtTableStateModel extends Datas<OtTable[]> {
//     constructor () {
//         super();
//     }
// }

// const tableInfo = new OtTableStateModel();
// @State<OtTableStateModel>({
//     name: 'OtTable',
//     defaults : tableInfo
// })

// @Injectable()
// export class OtTableState extends LoaderState {
//     constructor(
//         private _otService: OtService,
//         private _store: Store) {
//             super();
//     }

//     @Selector() static get(state: OtTableStateModel): any { return state; }

//     @Action(LoadOtTable)
//     loadOtTable(context: StateContext<OtTableStateModel>, action: LoadOtTable): void {
//         this.loading(context,'datas');

//         context.patchState({
//             datas: null
//         });

//         this._otService.getOtTable(action.payload).subscribe((result)=> {
//             context.patchState({
//                 datas: result.datas
//             });
//             this._store.dispatch(new UpdateOtTableFilterSelectedByProperties({properties: [ { name:'pagination', value: result.pagination} ] }));

//             this.loaded(context,'datas');

//         });
//     }

//     @Action(ClearOtTable)
//     clearOtTable(context: StateContext<OtTableStateModel>): void {
//         context.setState(new OtTableStateModel());
//     }
// }
