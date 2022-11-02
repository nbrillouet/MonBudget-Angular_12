import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountListDataModule } from 'app/services/Referential/account/list/account-list.data.module';
import { accountRoutes } from './account.routing';
import { AccountDetailModule } from './detail/account-detail.module';
import { AccountListModule } from './list/account-list.module';

@NgModule({
    declarations: [

    ],
    imports     : [
        RouterModule.forChild(accountRoutes),

        AccountListModule,
        AccountDetailModule,

        AccountListDataModule
    ],
    exports     : [

    ]
})
export class AccountModule
{
}
