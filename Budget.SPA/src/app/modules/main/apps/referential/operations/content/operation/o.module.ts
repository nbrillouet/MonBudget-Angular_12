import { NgModule } from '@angular/core';
import { OTableFooterComponent } from '../../footer/operation/table/o-table.footer.component';
import { OTableComponent } from './table/o-table.component';
import { OTableModule } from './table/o-table.module';

@NgModule({
    declarations: [ ],
    imports     : [
        // RouterModule.forChild(otfRoutes),

        OTableModule,
        // PlanCrudDetailModule
    ],
    exports     : [
        OTableComponent,
        OTableFooterComponent
    ]
})
export class OModule
{
}
