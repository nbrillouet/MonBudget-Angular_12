import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BooleanInput } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserLoggedService } from 'app/services/Referential/user/user-logged/user-logged.service';
import { EnumUserStatus } from 'app/model/enum/enum-user-status.enum';
import { UserForLogged } from 'app/model/referential/user/user.model';


@Component({
    selector       : 'user',
    templateUrl    : './user.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'user'
})
export class UserComponent implements OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_showAvatar: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() showAvatar: boolean = true;
    user: UserForLogged;
    enumStatut: typeof EnumUserStatus = EnumUserStatus;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _userLoggedService: UserLoggedService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to user changes
        this._userLoggedService.userLoggedState$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((x) => {
                if(x?.loader['datas']?.loaded) {
                    this.user = x.datas;
                    // Mark for check
                this._changeDetectorRef.markForCheck();
                }
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(void 0);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update the user status
     *
     * @param status
     */
    updateUserStatus(status: string): void
    {
        // this.user.status = EnumUserStatus[status];
        this._userLoggedService.updateStatus(EnumUserStatus[status]);
        // Return if user is not available
        // if ( !this.user )
        // {
        //     return;
        // }

        // Update the user
        // this._userService.update({
        //     ...this.user,
        //     status
        // }).subscribe();
    }

    /**
     * Sign out
     */
    signOut(): void
    {
        this._router.navigate(['/sign-out']);
    }

    profileOnClick($event): void {
        this._router.navigate(['/pages/profile']);
    }
}
