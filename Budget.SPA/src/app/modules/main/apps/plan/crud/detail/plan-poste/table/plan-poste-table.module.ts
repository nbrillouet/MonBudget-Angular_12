import { NgModule } from '@angular/core';
import { MatTableFilterModule } from '@corporate/mat-table-filter';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { PlanPosteTableDataModule } from 'app/services/plan/crud/detail/plan-poste/table/plan-poste-table.data.module';
import { SharedModule } from 'app/shared/shared.module';
import { PlanPosteTableComponent } from './plan-poste-table.component';

@NgModule({
    declarations: [
        PlanPosteTableComponent
    ],
    imports     : [
        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseScrollResetModule,

        MatTableFilterModule,
        PlanPosteTableDataModule
    ],
    exports: [PlanPosteTableComponent]
})
export class PlanPosteTableModule
{
}
