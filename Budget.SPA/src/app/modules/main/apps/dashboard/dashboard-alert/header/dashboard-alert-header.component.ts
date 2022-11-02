import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { UserDetailService } from 'app/services/Referential/user/user-detail/user-detail.service';

@Component({
    selector       : 'dashboard-alert-header',
    templateUrl    : './dashboard-alert-header.component.html',
    encapsulation  : ViewEncapsulation.None,
    animations : fuseAnimations
})
export class DashboardAlertHeaderComponent implements OnInit, OnDestroy
{
    seasonImage: string = `assets/images/ui/season/s${this.getSeason()}.jpg`;
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

    private getSeason(): string {
        const currentMonth = new Date().getMonth() + 1;
        if (currentMonth === 12 || currentMonth === 1 || currentMonth === 2)
            { return 'winter'; }
        else if (currentMonth >= 3 && currentMonth <= 5)
            { return 'spring'; }
        else if (currentMonth >= 6 && currentMonth <= 8)
            { return 'summer'; }
        else if (currentMonth >= 9 && currentMonth <= 11)
            { return 'autumn'; }
        return '';
    }



}
