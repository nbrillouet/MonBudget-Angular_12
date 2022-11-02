import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { OperationsService } from 'app/services/Referential/operations/operations.service';
import { SharedModule } from 'app/shared/shared.module';
import { OtfModule } from './content/operation-type-family/otf.module';
import { OtfTableModule } from './content/operation-type-family/table/otf-table.module';
import { OtModule } from './content/operation-type/ot.module';
import { OtTableModule } from './content/operation-type/table/ot-table.module';
import { OModule } from './content/operation/o.module';
import { OperationsHeaderComponent } from './header/operations-header.component';
import { OperationsComponent } from './operations.component';
import { operationsRoutes } from './operations.routing';

@NgModule({
    declarations: [
        OperationsHeaderComponent,
        OperationsComponent
    ],
    imports     : [
        RouterModule.forChild(operationsRoutes),

        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseScrollResetModule,

        OtfModule,
        OtModule,
        OModule
        // OtTableModule
    ],
    providers: [
        OperationsService
    ]
})

export class OperationsModule
{
}
