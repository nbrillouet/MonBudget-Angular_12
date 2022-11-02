import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BankAgencyService } from 'app/services/Referential/bank-agency.service';
import { BankSubFamilyService } from 'app/services/Referential/bank-sub-family.service';
import { ReferentialService } from 'app/services/Referential/referential.service';
import { AccountApiService } from '../account.api.service';
import { AccountDetailFilterState } from './account-detail-filter/account-detail-filter.state';
import { AccountDetailState } from './account-detail.state';

@NgModule({
    declarations: [],
    imports     : [
        NgxsModule.forFeature([
            AccountDetailFilterState,
            AccountDetailState
        ])
    ],
    providers:[
        AccountApiService,
        ReferentialService,
        BankSubFamilyService,
        BankAgencyService
        // OperationService,
        // OperationTransverseService,
        // OtService,
        // OtfService
    ],
    exports: []
})

export class AccountDetailStoreModule
{

}
