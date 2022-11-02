import { Injectable } from '@angular/core';
import { TypeButtonIcon } from '@corporate/mat-table-filter';
import { Datas } from '@corporate/model';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { OtfForTable } from 'app/model/referential/operation-type-family.model';
import { AssetService } from 'app/services/Referential/asset.service';
import { LoaderState } from 'app/state/_base/loader-state';
import { finalize } from 'rxjs';
import { OtfApiService } from '../otf-api.service';
import { ChangeOtfTableFilterSelectedPagination } from './otf-table-filter-selected/otf-table-filter-selected.action';
import { ChangeOtfTable } from './otf-table.action';

export class OtfTableStateModel extends Datas<OtfForTable[]> {
    constructor() {
        super();
    }
}

const otfTableStateModel = new OtfTableStateModel();

@State<OtfTableStateModel>({
    name: 'OtfTable',
    defaults : otfTableStateModel
})

@Injectable()
export class OtfTableState extends LoaderState {
    constructor(
        private _otfApiService: OtfApiService,
        private _store: Store,
        private _assetService: AssetService
    ) {
        super();
    }

    @Selector()
    static get(state: OtfTableStateModel): any { return state; }

    @Action(ChangeOtfTable)
    changeOtfTable(context: StateContext<OtfTableStateModel>, action: ChangeOtfTable): void {
        this.loading(context,'datas');

        context.patchState({
            datas: null
        });

        //Prerequis pour appel back: le main doit etre renseigné
        //user / idAccount /  monthYear / isWithItTransfer
        if(action.payload.user) {
            this._otfApiService.getOtfTable(action.payload)
                .pipe(finalize(()=> {this.loaded(context,'datas');}))
                .subscribe(
                    (result) => {
                        //remplacement des assets
                        result.datas.forEach((data: OtfForTable) => {
                            data.asset.code = this._assetService.get(data.asset.code);
                            data.buttonOt = {label:'(250)', tooltip: 'types opérations', icon: 'more_horiz', color: 'primary' } as TypeButtonIcon;
                            data.buttonDetail = {label:'...', tooltip: 'détail catégorie opération', icon: 'more_horiz', color: 'primary' } as TypeButtonIcon;
                        });
                        //buttonOt
                        // result.datas.forEach((data: OtfForTable) => {
                        //     data.buttonOt = {toolTip: 'test', icon } as TypeButtonIcon; //this._assetService.get(data.asset.code);
                        // });

                        context.patchState({
                            datas: result.datas
                        });

                        this._store.dispatch(new ChangeOtfTableFilterSelectedPagination(result.pagination));
                    }
                );
        }
    }
}


// import { Injectable } from '@angular/core';
// import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
// import { Datas } from 'app/model/generics/detail-info.model';
// import { OtfTable } from 'app/model/referential/operation-type-family.model';
// import { OtfService } from 'app/services/Referential/operation-type-family.service';
// import { LoaderState } from 'app/state/_base/loader-state';
// import { UpdateOtfTableFilterSelectedByProperties } from './otf-table-filter-selected/otf-table-filter-selected.action';
// import { ClearOtfTable, LoadOtfTable } from './otf-table.action';

// export class OtfTableStateModel extends Datas<OtfTable[]> {
//     constructor () {
//         super();
//     }
// }

// const tableInfo = new OtfTableStateModel();
// @State<OtfTableStateModel>({
//     name: 'OtfTable',
//     defaults : tableInfo
// })

// @Injectable()
// export class OtfTableState extends LoaderState {
//     constructor(
//         private _otfService: OtfService,
//         private _store: Store) {
//             super();
//     }

//     @Selector() static get(state: OtfTableStateModel): any { return state; }

//     @Action(LoadOtfTable)
//     loadOtfTable(context: StateContext<OtfTableStateModel>, action: LoadOtfTable): void {
//         this.loading(context,'datas');

//         context.patchState({
//             datas: null
//         });

//         this._otfService.getOtfTable(action.payload).subscribe((result)=> {
//             context.patchState({
//                 datas: result.datas
//             });
//             this._store.dispatch(new UpdateOtfTableFilterSelectedByProperties({properties: [ { name:'pagination', value: result.pagination} ] }));

//             this.loaded(context,'datas');
//         });
//     }

//     @Action(ClearOtfTable)
//     clearOtfTable(context: StateContext<OtfTableStateModel>): void {
//         context.setState(new OtfTableStateModel());
//     }
// }

