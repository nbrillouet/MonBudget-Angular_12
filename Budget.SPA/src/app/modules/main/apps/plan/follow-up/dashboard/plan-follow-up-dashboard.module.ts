import { NgModule } from '@angular/core';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { TranslocoModule } from '@ngneat/transloco';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { PlanFollowUpDashboardDataModule } from 'app/services/plan/follow-up/plan-follow-up-dashboard.data.module';
import { SharedModule } from 'app/shared/shared.module';
import { PlanFollowUpAmountRealComponent } from './amount-real/plan-follow-up-amount-real.component';
import { PlanFollowUpDashboardComponent } from './plan-follow-up-dashboard.component';

@NgModule({
    declarations: [
        PlanFollowUpDashboardComponent,
        PlanFollowUpAmountRealComponent
    ],
    imports     : [
        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseScrollResetModule,

        NgxsFormPluginModule,
        TranslocoModule,

        PlanFollowUpDashboardDataModule

    ]
})
export class PlanFollowUpDashboardModule
{
}
