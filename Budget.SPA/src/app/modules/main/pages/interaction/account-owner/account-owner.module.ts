import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FuseModule } from '@fuse';
import { AccountOwnerComponent } from './account-owner.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AccountOwnerState } from 'app/state/referential/account/account-owner/account-owner.state';
import { AccountOwnerService } from 'app/services/account-owner.service';
import { HelperService } from 'app/services/helper.service';

const routes = [
    {
        path     : 'interact/account-owner/:encryptResponse',
        component: AccountOwnerComponent
    }
];

@NgModule({
    declarations: [
        AccountOwnerComponent
    ],
    imports     : [
        MatButtonModule,
        MatProgressBarModule,
        MatIconModule,
        FuseModule,
        RouterModule.forChild(routes),
        NgxsModule.forFeature([
            AccountOwnerState
        ])
    ],
    providers:[
        AccountOwnerService,
        HelperService
    ]
})

export class AccountOwnerModule
{

}
