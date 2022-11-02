import { Injectable } from '@angular/core';
import { FilterSelection } from '@corporate/model';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { FilterOtfTableSelection } from 'app/model/filters/operation-type-family.filter';
import { LoaderState } from 'app/state/_base/loader-state';
import { finalize } from 'rxjs';
import { OtfApiService } from '../../otf-api.service';
import { ChangeOtfTableFilterSelection } from './otf-table-filter-selection.action';

export class OtfTableFilterSelectionStateModel extends FilterSelection<FilterOtfTableSelection> {
    constructor() {
        super(FilterOtfTableSelection);
    }
}

const otfTableFilterSelectionStateModel = new OtfTableFilterSelectionStateModel();

@State<OtfTableFilterSelectionStateModel>({
    name: 'OtfTableFilterSelection',
    defaults : otfTableFilterSelectionStateModel
})

@Injectable()
export class OtfTableFilterSelectionState extends LoaderState {

    constructor(
        private _store: Store,
        private _otfApiService: OtfApiService
        ) {
            super();
    }

    @Selector()
    static get(state: OtfTableFilterSelectionStateModel): any { return state; }

    @Action(ChangeOtfTableFilterSelection)
    changeOtfTableFilterSelection(context: StateContext<OtfTableFilterSelectionStateModel>, action: ChangeOtfTableFilterSelection): void {

        this.loading(context,'filter-selection');

        if(action.payload?.user) {
            this._otfApiService.getOtfTableFilter(action.payload)
            .pipe(finalize(()=> {this.loaded(context,'filter-selection');}))
            .subscribe(
                (res) => {
                    context.patchState({
                        selection: res
                    });
                    //initialisation du selected apres remplissage selection
                    // if(!action.payload.monthYear.year) {
                    //     action.payload.monthYear = {month: res.month[0], year: res.year[0]};
                    //     this._store.dispatch(new ChangeOtfTableFilterSelected(action.payload));
                    // }
                }
            );
        }
    }

}

// import { Injectable } from '@angular/core';
// import { Action, Selector, State, StateContext } from '@ngxs/store';
// import { FilterOtfTableSelection } from 'app/model/filters/operation-type-family.filter';
// import { FilterSelection } from 'app/model/generics/filter.info.model';
// import { OtfService } from 'app/services/Referential/operation-type-family.service';
// import { LoaderState } from 'app/state/_base/loader-state';
// import { LoadOtfTableFilterSelection } from './otf-table-filter-selection.action';

// export class OtfTableFilterSelectionStateModel extends FilterSelection<FilterOtfTableSelection> {
//     constructor() {
//         super(FilterOtfTableSelection);
//     }
// }

// const otfTableFilterSelectionStateModel = new OtfTableFilterSelectionStateModel();

// @State<OtfTableFilterSelectionStateModel>({
//     name: 'OtfTableFilterSelection',
//     defaults : otfTableFilterSelectionStateModel
// })

// @Injectable()
// export class OtfTableFilterSelectionState extends LoaderState {

//     constructor(
//         private _otfService: OtfService
//         ) {
//             super();
//     }

//     @Selector() static get(state: OtfTableFilterSelectionStateModel): any { return state; }

//     @Action(LoadOtfTableFilterSelection)
//     loadOtfTableFilterSelection(context: StateContext<OtfTableFilterSelectionStateModel>, action: LoadOtfTableFilterSelection): void {
//         this.loading(context,'filter-selection');

//         context.patchState({
//             selection: null
//         });

//         this._otfService.getOtfTableFilter(action.payload).subscribe((result)=> {
//             context.patchState({
//                 selection: result
//             });

//             this.loaded(context,'filter-selection');
//         });

//     }

// }
