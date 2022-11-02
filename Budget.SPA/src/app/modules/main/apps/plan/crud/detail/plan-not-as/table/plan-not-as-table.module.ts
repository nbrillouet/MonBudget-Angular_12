import { NgModule } from '@angular/core';
import { MatTableFilterModule } from '@corporate/mat-table-filter';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { PlanNotAsTableDataModule } from 'app/services/plan/crud/detail/plan-not-as/table/plan-not-as-table.data.module';
import { SharedModule } from 'app/shared/shared.module';
import { PlanNotAsTableComponent } from './plan-not-as-table.component';

@NgModule({
    declarations: [
        PlanNotAsTableComponent
    ],
    imports     : [
        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseScrollResetModule,

        MatTableFilterModule,
        PlanNotAsTableDataModule
    ],
    exports: [PlanNotAsTableComponent]
})
export class PlanNotAsTableModule
{
}
