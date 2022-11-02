/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';

export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'home'},

    // // Redirect signed in user to the '/example'
    // //
    // // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // // path. Below is another redirection for that path to redirect the user to the desired
    // // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'apps/dashboard-alert'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            // {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            // {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            // {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)}
            // {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)}
        ]
    },

    // main routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        // resolve    : {
        //     initialData: InitialDataResolver,
        // },
        children   : [
            // Apps
            {path: 'apps', children: [
                {path: 'dashboard-alert', loadChildren: () => import('app/modules/main/apps/dashboard/dashboard-alert/dashboard-alert.module').then(m => m.DashboardAlertModule)},

                {path: 'referential/accounts', loadChildren: () => import('app/modules/main/apps/referential/account/account.module').then(m => m.AccountModule)},
                {path: 'referential/operations', loadChildren: () => import('app/modules/main/apps/referential/operations/operations.module').then(m => m.OperationsModule)},

                {path: 'account-statement-import', loadChildren: () => import('app/modules/main/apps/account-statement-import/asi.module').then(m => m.AsiModule)},
                {path: 'account-statement', loadChildren: () => import('app/modules/main/apps/account-statement/as.module').then(m => m.AsModule)},

                {path: 'plans', loadChildren: () => import('app/modules/main/apps/plan/crud/plan-crud.module').then(m => m.PlanCrudModule)},
                {path: 'plans/follow-up', loadChildren: () => import('app/modules/main/apps/plan/follow-up/plan-follow-up.module').then(m => m.PlanFollowUpModule)},




                // {path: 'calendar', loadChildren: () => import('app/modules/admin/apps/calendar/calendar.module').then(m => m.CalendarModule)},
                // {path: 'chat', loadChildren: () => import('app/modules/admin/apps/chat/chat.module').then(m => m.ChatModule)},
                // {path: 'contacts', loadChildren: () => import('app/modules/admin/apps/contacts/contacts.module').then(m => m.ContactsModule)},
                // {path: 'ecommerce', loadChildren: () => import('app/modules/admin/apps/ecommerce/ecommerce.module').then(m => m.ECommerceModule)},
                // {path: 'file-manager', loadChildren: () => import('app/modules/admin/apps/file-manager/file-manager.module').then(m => m.FileManagerModule)},
                // {path: 'help-center', loadChildren: () => import('app/modules/admin/apps/help-center/help-center.module').then(m => m.HelpCenterModule)},
                // {path: 'mailbox', loadChildren: () => import('app/modules/admin/apps/mailbox/mailbox.module').then(m => m.MailboxModule)},
                // {path: 'notes', loadChildren: () => import('app/modules/admin/apps/notes/notes.module').then(m => m.NotesModule)},
                // {path: 'scrumboard', loadChildren: () => import('app/modules/admin/apps/scrumboard/scrumboard.module').then(m => m.ScrumboardModule)},
                // {path: 'tasks', loadChildren: () => import('app/modules/admin/apps/tasks/tasks.module').then(m => m.TasksModule)},
            ]},

            // Pages
            {path: 'pages', children: [
                // Profile
                {path: 'profile', loadChildren: () => import('app/modules/main/pages/profile/profile.module').then(m => m.ProfileModule)}
            ]}
        ]
    }
];
