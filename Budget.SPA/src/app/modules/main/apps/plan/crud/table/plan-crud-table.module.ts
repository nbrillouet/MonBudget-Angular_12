import { NgModule } from '@angular/core';
import { MatTableFilterModule } from '@corporate/mat-table-filter';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { PlanCrudTableDataModule } from 'app/services/plan/crud/table/plan-crud-table.data.module';
import { SharedModule } from 'app/shared/shared.module';


import { PlanCrudTableHeaderComponent } from './main/header/plan-crud-table-header.component';
import { PlanCrudTableMainComponent } from './main/plan-crud-table-main.component';

@NgModule({
    declarations: [
        PlanCrudTableMainComponent,
        PlanCrudTableHeaderComponent
    ],
    imports     : [
        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseScrollResetModule,

        MatTableFilterModule,
        PlanCrudTableDataModule
    ]
})
export class PlanCrudTableModule
{
}
