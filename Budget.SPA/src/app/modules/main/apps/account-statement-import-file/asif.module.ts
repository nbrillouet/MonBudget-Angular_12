import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { asifRoutes } from './asif.routing';
import { AsifTableModule } from './table/asif-table.module';
import { AsifDetailModule } from './detail/asif-detail.module';

@NgModule({
    declarations: [
        // AsifMainComponent,
        // AsifDetailComponent,
        // AsifTableComponent,
        // AsifTableMainComponent,
        // AsifTableHeaderComponent
    ],
    imports     : [
        RouterModule.forChild(asifRoutes),
        AsifTableModule,
        AsifDetailModule
        // AngularMaterialModule,
        // SharedModule,
        // FuseScrollbarModule,
        // FuseScrollResetModule,
        // // AsifTableDataModule,

        // AsifDetailDataModule,
        // NgxsFormPluginModule,
        // TranslocoModule,
        // GMapModule
    ]
})
export class AsifModule
{
}
