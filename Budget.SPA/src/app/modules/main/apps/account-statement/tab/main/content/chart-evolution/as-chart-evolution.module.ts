import { NgModule } from '@angular/core';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { AsChartEvolutionDataModule } from 'app/services/account-statement/account-statement/chart-evolution/as-chart-evolution.data.module';
import { SharedModule } from 'app/shared/shared.module';
import { WidgetCardChartBarModule } from 'app/shared/widgets/widget-card-chart-bar/widget-card-chart-bar.module';
import { AsChartEvolutionComponent } from './as-chart-evolution.component';

@NgModule({
    declarations: [
        AsChartEvolutionComponent
    ],
    imports     : [
        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseScrollResetModule,

        WidgetCardChartBarModule,

        AsChartEvolutionDataModule
    ],
    exports: [
        AsChartEvolutionComponent
    ]
})
export class AsChartEvolutionModule
{
}
