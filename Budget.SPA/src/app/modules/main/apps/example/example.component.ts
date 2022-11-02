import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngxs/store';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { LoadUserDetail } from 'app/state/user/user-detail/user-detail.action';
import { LoadUserLogged } from 'app/state/user/user-logged/user-logged.action';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent
{
    /**
     * Constructor
     */
    constructor(
        private _store: Store,

    )
    {

    }
}
