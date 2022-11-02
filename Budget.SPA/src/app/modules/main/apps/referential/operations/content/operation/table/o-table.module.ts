import { NgModule } from '@angular/core';
import { MatTableFilterModule } from '@corporate/mat-table-filter';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { OTableDataModule } from 'app/services/Referential/operations/operation/table/o-table.data.module';
import { SharedModule } from 'app/shared/shared.module';
import { OTableFooterComponent } from '../../../footer/operation/table/o-table.footer.component';
import { OTableComponent } from './o-table.component';

@NgModule({
    declarations: [
        OTableComponent,
        OTableFooterComponent
    ],
    imports     : [
        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseScrollResetModule,

        MatTableFilterModule,

        OTableDataModule
    ],
    exports: [
        OTableComponent,
        OTableFooterComponent
    ]
})
export class OTableModule
{
}
