import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OtfTableFooterComponent } from '../../footer/operation-type-family/table/otf-table.footer.component';
// import { otfRoutes } from './otf.routing';
import { OtfTableComponent } from './table/otf-table.component';
import { OtfTableModule } from './table/otf-table.module';

@NgModule({
    declarations: [ ],
    imports     : [
        // RouterModule.forChild(otfRoutes),

        OtfTableModule,
        // PlanCrudDetailModule
    ],
    exports     : [
        OtfTableComponent,
        OtfTableFooterComponent
    ]
})
export class OtfModule
{
}
