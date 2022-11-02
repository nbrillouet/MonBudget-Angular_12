import { NgModule } from '@angular/core';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { PlanPosteDetailDataModule } from 'app/services/plan/crud/detail/plan-poste/detail/plan-poste-detail.data.module';
import { SharedModule } from 'app/shared/shared.module';
import { WidgetCardSimpleChartBarModule } from 'app/shared/widgets/widget-card-simple-chart-bar/widget-card-simple-chart-bar.module';
import { PlanPosteDetailComponent } from './plan-poste-detail.component';

@NgModule({
    declarations: [
        PlanPosteDetailComponent
    ],
    imports     : [
        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseScrollResetModule,

        NgxsFormPluginModule,
        PlanPosteDetailDataModule,
        WidgetCardSimpleChartBarModule
    ],
    exports: [PlanPosteDetailComponent]
})

export class PlanPosteDetailModule
{
}
