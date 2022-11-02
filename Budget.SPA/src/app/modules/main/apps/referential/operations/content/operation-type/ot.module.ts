import { NgModule } from '@angular/core';
import { OtTableFooterComponent } from '../../footer/operation-type/table/ot-table.footer.component';
import { OtTableComponent } from './table/ot-table.component';
import { OtTableModule } from './table/ot-table.module';

@NgModule({
    declarations: [ ],
    imports     : [
        // RouterModule.forChild(otfRoutes),

        OtTableModule,
        // PlanCrudDetailModule
    ],
    exports     : [
        OtTableComponent,
        OtTableFooterComponent
    ]
})
export class OtModule
{
}
