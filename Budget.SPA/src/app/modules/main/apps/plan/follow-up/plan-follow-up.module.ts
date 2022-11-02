import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgressBarCustomModule } from 'app/web-component/progress-bar-custom/progress-bar-custom.module';
import { PlanFollowUpDashboardModule } from './dashboard/plan-follow-up-dashboard.module';
import { planFollowUpRoutes } from './plan-follow-up.routing';

@NgModule({
    declarations: [ ],
    imports     : [
        RouterModule.forChild(planFollowUpRoutes),

        PlanFollowUpDashboardModule,
        ProgressBarCustomModule
    ],
    exports     : [

    ]
})
export class PlanFollowUpModule
{
}
