import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config';
import { Datas } from '@corporate/model';
import { Select, Store } from '@ngxs/store';
import { AccountOwner } from 'app/model/referential/account.model';
import { ResponseAccountOwner } from 'app/state/referential/account/account-owner/account-owner.action';
import { AccountOwnerState } from 'app/state/referential/account/account-owner/account-owner.state';
import { Observable } from 'rxjs';


@Component({
    selector   : 'account-owner',
    templateUrl: './account-owner.component.html',
    styleUrls  : ['./account-owner.component.scss'],
    animations : fuseAnimations
})
export class AccountOwnerComponent implements OnInit
{
    @Select(AccountOwnerState.get) accountOwner$: Observable<Datas<AccountOwner>>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _activatedRoute: ActivatedRoute,
        private _store: Store
    )
    {

        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }

            }
        };

    }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe((routeParams) => {
            const encryptResponse=routeParams['encryptResponse'];


            this._store.dispatch(new ResponseAccountOwner(encryptResponse));

        });
    }

}
