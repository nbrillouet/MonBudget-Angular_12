import { NgModule } from '@angular/core';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { AsTableDataModule } from 'app/services/account-statement/account-statement/table/as-table.data.module';
import { SharedModule } from 'app/shared/shared.module';
import { MatTableFilterModule } from '@corporate/mat-table-filter';
import { AsTableFooterComponent } from '../../footer/table/as-table.footer.component';
import { AsTableComponent } from './as-table.component';

@NgModule({
    declarations: [
        AsTableComponent,
        AsTableFooterComponent
    ],
    imports     : [
        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseScrollResetModule,

        MatTableFilterModule,

        AsTableDataModule
    ],
    exports: [
        AsTableComponent,
        AsTableFooterComponent
    ]
})
export class AsTabTableModule
{
}
