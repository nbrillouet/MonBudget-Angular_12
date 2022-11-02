import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { UserDetailModule } from 'app/services/Referential/user/user-detail/user-detail.module';
import { SharedModule } from 'app/shared/shared.module';
import { DashboardAlertComponent } from './dashboard-alert.component';
import { dashboardAlertRoutes } from './dashboard-alert.routing';
import { DashboardAlertHeaderComponent } from './header/dashboard-alert-header.component';
import { DashboardAlertMainComponent } from './main/dashboard-alert-main.component';

@NgModule({
    declarations: [
        DashboardAlertComponent,
        DashboardAlertHeaderComponent,
        DashboardAlertMainComponent
    ],
    imports     : [
        RouterModule.forChild(dashboardAlertRoutes),

        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseFindByKeyPipeModule,

        UserDetailModule
    ]
})
export class DashboardAlertModule
{
}
