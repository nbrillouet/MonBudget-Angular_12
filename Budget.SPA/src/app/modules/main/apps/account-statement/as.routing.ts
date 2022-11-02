import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { AsTabMainComponent } from './tab/main/as-tab-main.component';

export const asRoutes: Route[] = [
    {
        path     : 'accounts/:idAccount',
        component: AsTabMainComponent,
        canActivate: [AuthGuard]
    },
    {
      path     : 'accounts/:idAccount/tabs/:idTab',
      component: AsTabMainComponent,
      canActivate: [AuthGuard]
    }
    // {
    //     path     : 'accounts/:idAccount/account-statements/:idAccountStatement/detail',
    //     component: AccountStatementDetailComponent,
    //     canActivate: [AuthGuard]
    // },

    // {
    //     path      : '**',
    //     redirectTo: ''
    // }
];
