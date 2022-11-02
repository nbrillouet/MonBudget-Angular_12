import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { AuthService } from 'app/core/auth/auth.service';
import { EnumService } from 'app/services/enum.service';
import { UserDetailService } from 'app/services/Referential/user/user-detail/user-detail.service';

@Component({
    selector       : 'dashboard-alert-main',
    templateUrl    : './dashboard-alert-main.component.html',
    encapsulation  : ViewEncapsulation.None,
    animations : fuseAnimations
})
export class DashboardAlertMainComponent implements OnInit, OnDestroy
{
    constructor(
        public _authService: AuthService,
        public _userDetailService: UserDetailService,
        public _enumService: EnumService

     )
    {
        // this.property = this._asifDetailService.asifForm.model as AsifForDetail;
    }


    ngOnDestroy(): void
    {

    }

    ngOnInit(): void {
        this._userDetailService.load(this._authService.user.id);
        // this._enumService.EnumUserEventWarning.green
        // this._activatedRoute.params.subscribe((routeParams) => {
        //     this.idFile = routeParams['idFile'];
        //     this.idAccountStatement = routeParams['idAccountStatement'];
        // });

        // this._fuseConfigService.config$.subscribe((config: AppConfig) => {
        //     this.config = config;
        // });
    }


}
