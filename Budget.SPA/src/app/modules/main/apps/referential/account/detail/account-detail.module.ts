import { NgModule } from '@angular/core';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { TranslocoModule } from '@ngneat/transloco';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { AccountDetailDataModule } from 'app/services/Referential/account/detail/account-detail.data.module';
import { SharedModule } from 'app/shared/shared.module';
import { GMapModule } from 'app/web-component/g-map/g-map-search/g-map.module';
import { AccountDetailMainComponent } from './main/account-detail-main.component';
import { AccountDetailContentComponent } from './main/content/account-detail-content.component';
import { AccountDetailHeaderComponent } from './main/header/account-detail-header.component';

@NgModule({
    declarations: [
        AccountDetailMainComponent,
        AccountDetailHeaderComponent,
        AccountDetailContentComponent
    ],
    imports     : [
        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseScrollResetModule,

        NgxsFormPluginModule,
        TranslocoModule,
        GMapModule,

        AccountDetailDataModule
    ]
})
export class AccountDetailModule
{
}
