import { NgModule } from '@angular/core';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { TranslocoModule } from '@ngneat/transloco';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { PlanCrudDetailDataModule } from 'app/services/plan/crud/detail/plan-crud-detail.data.module';
import { SharedModule } from 'app/shared/shared.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { PlanCrudDetailContentComponent } from './main/content/plan-crud-detail-content.component';
import { PlanCrudDetailContentGeneralComponent } from './main/content/tab-01-general/plan-crud-detail-content-general.component';
import { PlanCrudDetailHeaderComponent } from './main/header/plan-crud-detail-header.component';
import { PlanCrudDetailMainComponent } from './main/plan-crud-detail-main.component';
import { PlanNotAsModule } from './plan-not-as/plan-not-as.module';
import { PlanNotAsTableModule } from './plan-not-as/table/plan-not-as-table.module';
import { PlanPosteModule } from './plan-poste/plan-poste.module';
import { PlanPosteTableModule } from './plan-poste/table/plan-poste-table.module';


@NgModule({
    declarations: [
        PlanCrudDetailMainComponent,
        PlanCrudDetailHeaderComponent,
        PlanCrudDetailContentComponent,
        PlanCrudDetailContentGeneralComponent
    ],
    imports     : [
        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseScrollResetModule,

        NgxsFormPluginModule,
        TranslocoModule,
        ColorPickerModule,


        PlanCrudDetailDataModule,

        // PlanPosteTableModule
        PlanPosteModule,
        PlanNotAsTableModule

    ]
})
export class PlanCrudDetailModule
{
}
