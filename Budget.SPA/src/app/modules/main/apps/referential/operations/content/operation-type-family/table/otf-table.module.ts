import { NgModule } from '@angular/core';
import { MatTableFilterModule } from '@corporate/mat-table-filter';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { OtfTableDataModule } from 'app/services/Referential/operations/operation-type-family/table/otf-table.data.module';
import { SharedModule } from 'app/shared/shared.module';
import { OtfTableFooterComponent } from '../../../footer/operation-type-family/table/otf-table.footer.component';
import { OtfTableComponent } from './otf-table.component';

@NgModule({
    declarations: [
        OtfTableComponent,
        OtfTableFooterComponent
    ],
    imports     : [
        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseScrollResetModule,

        MatTableFilterModule,

        OtfTableDataModule
    ],
    exports: [
        OtfTableComponent,
        OtfTableFooterComponent
    ]
})
export class OtfTableModule
{
}
