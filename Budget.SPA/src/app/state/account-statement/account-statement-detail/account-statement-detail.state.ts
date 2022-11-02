// import { ReferentialService } from "app/main/_services/Referential/referential.service";
// import { LoadAsDetail, asDetailChangeOperationTypeFamily, asDetailChangeOperationType, ClearAsDetail } from "./account-statement-detail.action";
// import { ComboSimple } from "app/main/_models/generics/combo.model";
// import { ISelect, EnumSelectType } from "app/main/_models/generics/select.model";
// import { AsDetail } from "app/main/_models/account-statement/account-statement-detail.model";
// import { AsService } from "app/main/apps/account-statement/account-statement.service";
// import { State, Selector, Action, StateContext } from "@ngxs/store";
// import { LoaderState } from "../../_base/loader-state";
// import { Datas } from "app/main/_models/generics/detail-info.model";
// import { Injectable } from "@angular/core";

// export class AsDetailStateModel extends Datas<AsDetail> {
//     constructor () {
//         super();
//     }
// }

// let asDetailStateModel = new AsDetailStateModel();

// @State<AsDetailStateModel>({
//     name: 'AsDetail',
//     defaults : asDetailStateModel
// })

// @Injectable()
// export class AsDetailState extends LoaderState {

//     constructor(
//         private _asService: AsService,
//         private _referentialService: ReferentialService
//         ) {
//             super();
//     }

//     @Selector()
//     static get(state: AsDetailStateModel) {
 
//         return state;
//     }

//     // @Selector()
//     // static getFilter(state: PlanTableComboFilterStateModel) {
//     //     return state.filter;
//     // }

//     @Action(LoadAsDetail)
//     loadAsDetail(context: StateContext<AsDetailStateModel>, action: LoadAsDetail) {
//         this.loading(context,'datas');

//         const state = context.getState();
//         state.datas = null;
//         context.patchState(state);

//         this._asService.getAsDetail(action.payload)
//             .subscribe(result=> {
//                 let state = context.getState();
//                 state.datas = result;
//                 context.patchState(state);

//                 this.loaded(context,'datas');
//             });

//     }

//     // @Action(LoadAsDetailSuccess)
//     // loadSuccess(context: StateContext<AsDetailStateModel>, action: LoadAsDetailSuccess) {
//     //     let state = context.getState();
//     //     state.datas = action.payload;

//     //     context.patchState(state);
//     // }

//     @Action(ClearAsDetail)
//     clear(context: StateContext<AsDetailStateModel>) {
//         return context.setState(new AsDetailStateModel());
//     }

//     //====================================
//     //          OperationTypeFamily
//     //====================================
//     @Action(asDetailChangeOperationTypeFamily)
//     asDetailChangeOperationTypeFamily(context: StateContext<AsDetailStateModel>, action: asDetailChangeOperationTypeFamily) {
//         this.loading(context,'operationTypeFamily');

//         const state = context.getState();
//         state.datas.operationTypeFamily.selected = action.payload;
//         state.datas.operationType = new ComboSimple<ISelect>();
        
//         context.patchState(state);
//         this._referentialService.operationTypeService.GetSelectList(action.payload.id,EnumSelectType.inconnu)
//             .subscribe(result=> {
//                 let state = context.getState();
//                 state.datas.operationType.list = result;
//                 state.datas.operationType.selected = action.payload[0];
//                 context.patchState(state);

//                 this.loaded(context,'operationTypeFamily');
//             });
//     }

//     // @Action(asDetailChangeOperationTypeFamilySuccess)
//     // asDetailChangeOperationTypeFamilySuccess(context: StateContext<AsDetailStateModel>, action: asDetailChangeOperationTypeFamilySuccess) {
       
//     //     let state = context.getState();
//     //     state.datas.operationType.list = action.payload;
//     //     state.datas.operationType.selected = action.payload[0];

//     //     context.patchState(state);
//     // }

//     //====================================
//     //          OperationType
//     //====================================
//     @Action(asDetailChangeOperationType)
//     asDetailChangeOperationType(context: StateContext<AsDetailStateModel>, action: asDetailChangeOperationType) {
//         this.loading(context,'operationType');
        
//         const state = context.getState();
//         state.datas.operationType.selected = action.payload.operationType;
//         state.datas.operationMethod.selected = action.payload.operationMethod;
//         state.datas.operation = new ComboSimple<ISelect>();
//         context.patchState(state);
        
//         this._referentialService.operationService.GetSelectList(action.payload.operationMethod.id,action.payload.operationType.id,EnumSelectType.inconnu)
//             .subscribe(result => {
//                 let state = context.getState();
//                 state.datas.operation.list = result;
//                 state.datas.operation.selected = action.payload[0];
//                 context.patchState(state);

//                 this.loaded(context,'operationType');
//             });
//     }

//     // @Action(asDetailChangeOperationTypeSuccess)
//     // asifDetailChangeOperationTypeSuccess(context: StateContext<AsDetailStateModel>, action: asDetailChangeOperationTypeSuccess) {
//     //     let state = context.getState();
//     //     state.datas.operation.list = action.payload;
//     //     state.datas.operation.selected = action.payload[0];

//     //     context.patchState(state);
//     // }
    
// }
