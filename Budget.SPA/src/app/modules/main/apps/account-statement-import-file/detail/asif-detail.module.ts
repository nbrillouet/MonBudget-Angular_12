import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { TranslocoModule } from '@ngneat/transloco';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { AsifDetailDataModule } from 'app/services/account-statement/account-statement-import-file/detail/asif-detail.data.module';
import { SharedModule } from 'app/shared/shared.module';
import { GMapModule } from 'app/web-component/g-map/g-map-search/g-map.module';
import { AsifDetailHeaderComponent } from './header/asif-detail-header.component';
import { AsifDetailMainComponent } from './main/asif-detail-main.component';

@NgModule({
    declarations: [
        AsifDetailMainComponent,
        AsifDetailHeaderComponent
    ],
    imports     : [
        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseScrollResetModule,
        AsifDetailDataModule,
        NgxsFormPluginModule,
        TranslocoModule,
        GMapModule
    ]
})
export class AsifDetailModule
{
}
