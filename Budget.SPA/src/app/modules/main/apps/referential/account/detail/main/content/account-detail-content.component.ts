import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { AccountForDetail } from 'app/model/referential/account.model';
import { AccountDetailService } from 'app/services/Referential/account/detail/account-detail.service';
import { GenericFormComponent } from 'app/shared/generic-form/generic-form.component';

@Component({
    selector       : 'account-detail-content',
    templateUrl    : './account-detail-content.component.html',
    encapsulation  : ViewEncapsulation.None,
    animations : fuseAnimations
})
export class AccountDetailContentComponent extends GenericFormComponent implements OnInit, OnDestroy
{
    property: AccountForDetail;
    // config: any;

    constructor(
        // private _activatedRoute: ActivatedRoute,
        // private _location: Location,
        // private _store: Store,
        // private _helperService: HelperService,
        // public _userLoggedService: UserLoggedService,
        public _accountDetailService: AccountDetailService,
        // public _fuseConfigService: FuseConfigService
     )
    {
        super();
        this.property = this._accountDetailService.form.model as AccountForDetail;
    }

    ngOnDestroy(): void {

    }

    ngOnInit(): void {
        // this._fuseConfigService.config$.subscribe((config: AppConfig) => {
        //     this.config = config;
        // });
    }

    // save(): void {
    //     // this._asifDetailService.saveAsifDetail();

    // }

    // movePrevious(): void {
    //     // this._location.back();
    // }



    getValue(property: any): any {
        // if(typeof property === 'object') {
        //     property = (Object.values(property)[0] as string).split('.')[0];
        // }
        return this._accountDetailService.form.getValue(property);
    }

    getControl(property: any): AbstractControl {
        return this._accountDetailService.form.getControl(property);
    }

    getProperty(property): any {
        return this._accountDetailService.form.getProperty(property);
    }


    // getAsset(): string {
    //     if(!this.config) {
    //         return null;
    //     }
    //     let assetUrl: string = this._helperService.getDeepClone(this._asifDetailService.asifForm.getValue(x=>x.operationTypeFamily)?.code);

    //     if(!assetUrl){
    //         return null;
    //     }
    //     assetUrl = assetUrl.replace('[theme]', this.config.theme);

    //     return assetUrl;
    // }

}
