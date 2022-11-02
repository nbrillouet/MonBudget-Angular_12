import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/main/apps/example/example.component';
import { UserDetailStoreModule } from 'app/state/user/user-detail/user-detail.store.module';
import { UserLoggedStoreModule } from 'app/state/user/user-logged/user-logged.store.module';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes)
    ]
})
export class ExampleModule
{
}
