import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { UserDetailService } from 'app/services/Referential/user/user-detail/user-detail.service';

@Component({
    selector       : 'dashboard-alert',
    templateUrl    : './dashboard-alert.component.html',
    encapsulation  : ViewEncapsulation.None,
    animations : fuseAnimations
})
export class DashboardAlertComponent implements OnInit, OnDestroy
{
    constructor(
        public _userDetailService: UserDetailService

     )
    {
        // this.property = this._asifDetailService.asifForm.model as AsifForDetail;
    }


    ngOnDestroy(): void
    {

    }

    ngOnInit(): void {
        // this._activatedRoute.params.subscribe((routeParams) => {
        //     this.idFile = routeParams['idFile'];
        //     this.idAccountStatement = routeParams['idAccountStatement'];
        // });

        // this._fuseConfigService.config$.subscribe((config: AppConfig) => {
        //     this.config = config;
        // });
    }


}
