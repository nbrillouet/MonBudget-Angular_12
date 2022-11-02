import { NgModule } from '@angular/core';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { AsMainDataModule } from 'app/services/account-statement/account-statement/main/as-main-data.module';
import { AsSoldeDataModule } from 'app/services/account-statement/account-statement/solde/as-solde.data.module';
import { SharedModule } from 'app/shared/shared.module';
import { AsTabMainComponent } from './as-tab-main.component';
import { AsTabHeaderComponent } from './header/as-tab-header.component';
import { AsTabTableModule } from './content/table/as-table.module';
import { AsChartEvolutionModule } from './content/chart-evolution/as-chart-evolution.module';
import { AsInternalTransferModule } from './content/internal-transfert/as-internal-transfert.module';

@NgModule({
    declarations: [
        AsTabMainComponent,
        AsTabHeaderComponent
    ],
    imports     : [
        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseScrollResetModule,

        AsMainDataModule,
        AsSoldeDataModule,

        AsTabTableModule,
        AsChartEvolutionModule,
        AsInternalTransferModule
        // AsInternalTransfertModule

    ]
})
export class AsTabMainModule
{
}
