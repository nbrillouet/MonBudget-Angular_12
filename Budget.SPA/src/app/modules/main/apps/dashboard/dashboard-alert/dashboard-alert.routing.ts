import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { DashboardAlertComponent } from './dashboard-alert.component';
import { DashboardAlertMainComponent } from './main/dashboard-alert-main.component';

export const dashboardAlertRoutes: Route[] = [
    {
        path     : '',
        component: DashboardAlertMainComponent,
        canActivate: [AuthGuard]
    }
];
