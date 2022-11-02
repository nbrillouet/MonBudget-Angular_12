import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { SharedModule } from 'app/shared/shared.module';
import { WidgetCardChartBarComponent } from './widget-card-chart-bar.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        WidgetCardChartBarComponent
    ],
    imports: [
        SharedModule,
        AngularMaterialModule,
        NgChartsModule
        // NgApexchartsModule
        // NgChartsModule
        // WidgetCardChartBarComponent
    ],
    exports: [
        WidgetCardChartBarComponent
    ],
    providers: [

    ]
})
export class WidgetCardChartBarModule { }
