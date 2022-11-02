import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { UserForDetail } from 'app/model/referential/user/user.model';
import { HelperService } from 'app/services/helper.service';
import { ProfileService } from 'app/services/Referential/user/profile/profile.service';
import { Subject } from 'rxjs';

@Component({
    selector       : 'profile-localisation',
    templateUrl    : './profile-localisation.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileLocalisationComponent implements OnInit, OnDestroy
{
    property: UserForDetail = this._profileService.form.model;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(

        public _profileService: ProfileService,
        public _helperService: HelperService

    ) {
        // super();
        // this.property = this._profileService.form.model as UserForDetail;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
     ngOnInit(): void
     {
        // this._profileService.userDetailState$
        // .pipe(takeUntil(this._unsubscribeAll),distinctUntilChanged())
        // .subscribe((x) => {
        //     // if (x?.loader['datas']?.loaded && !this._helperService.areEquals(this.x,x)) {
        //     //     this.x=x;
        //     // }
        // });
     }


    /**
     * On destroy
     */
    ngOnDestroy(): void
    {

    }

    public getValue(property: any): any {
        return this._profileService.form.getValue(property);
    }
}
