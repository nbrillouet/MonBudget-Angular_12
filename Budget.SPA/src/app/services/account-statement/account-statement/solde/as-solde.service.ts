import { Injectable } from '@angular/core';
import { CorpDataReadonly } from '@corporate/data';
import { Datas } from '@corporate/model';
import { Select, Store } from '@ngxs/store';
import { AsSolde } from 'app/model/account-statement/account-statement-solde.model';
import { HelperService } from 'app/services/helper.service';
import { AsSoldeState } from 'app/state/account-statement/account-statement-solde/account-statement-solde.state';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AsSoldeService extends CorpDataReadonly<AsSolde>
{
    @Select(AsSoldeState.get) state$: Observable<Datas<AsSolde>>;

    constructor(
        private _helperService: HelperService
    )
    {
        super(AsSolde);

        this.state$.subscribe((x) => {
            this.isStateLoaded = false;
            if(x?.loader['datas']?.loaded) {
                this.isStateLoaded = true;
                if(!this._helperService.areEquals(x.datas, this.value)) {
                    this.value = this._helperService.getDeepClone(x.datas);
                }
            }
        });
    }
}

// @Injectable({ providedIn: 'root' })
// export class AsSoldeService
// {
//     @Select(AsSoldeState.get) stateAsSolde$: Observable<DatasFilter<AsSolde, FilterAsTableSelected>>;
//     isStateLoaded: boolean = false;
//     /**
//      * Constructor
//      */
//     constructor(
//         private _store: Store
//     )
//     {
//         this.stateAsSolde$
//             .subscribe((x)=>{
//                 this.isStateLoaded = x.loader['datas']?.loaded;

//             });
//         // this.stateDetail$
//         //     // .pipe(takeUntil(this._unsubscribeAll))
//         //     .subscribe((x)=>{

//         //         if(x.loader['datas']?.loaded) {
//         //             this.formIsLoaded = true;
//         //             if(x.model.hasOwnProperty('id')) {
//         //                 if (this.currentId !== x.model.id) {
//         //                     this.currentId = x.model.id;
//         //                     this.initTrigger();
//         //                 }
//         //             }
//         //         }

//         //         if(x.loader['operation-change']?.loaded) {
//         //             this.isNewOperationTemplate = false;
//         //         }
//         //         if(x.loader['operation-transverse-change']?.loaded) {
//         //             this.isNewOperationTransverseTemplate = false;
//         //         }
//         //         if(x.loader['datas-save']?.loading) {
//         //             this.asifSaveInProgress=true;
//         //             this.asifForm.disableForm(true);
//         //         }
//         //         if(x.loader['datas-save']?.loaded) {
//         //             this.asifSaveInProgress = false;
//         //             this.asifForm.disableForm(false);
//         //         }
//         // });

//         // this.stateFilter$
//         //     // .pipe(takeUntil(this._unsubscribeAll))
//         //     .subscribe((x)=>{

//         // });
//     }


// }
