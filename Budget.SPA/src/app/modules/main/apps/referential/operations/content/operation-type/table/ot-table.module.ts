import { NgModule } from '@angular/core';
import { MatTableFilterModule } from '@corporate/mat-table-filter';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { OtTableDataModule } from 'app/services/Referential/operations/operation-type/table/ot-table.data.module';
import { SharedModule } from 'app/shared/shared.module';
import { OtTableFooterComponent } from '../../../footer/operation-type/table/ot-table.footer.component';
import { OtTableComponent } from './ot-table.component';

@NgModule({
    declarations: [
        OtTableComponent,
        OtTableFooterComponent
    ],
    imports     : [
        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseScrollResetModule,

        MatTableFilterModule,

        OtTableDataModule
    ],
    exports: [
        OtTableComponent,
        OtTableFooterComponent
    ]
})
export class OtTableModule
{
}
