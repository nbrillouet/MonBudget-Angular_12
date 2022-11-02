import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { UserDetailStoreModule } from 'app/state/user/user-detail/user-detail.store.module';
import { UserDetailModule } from '../user-detail/user-detail.module';
import { UserDetailService } from '../user-detail/user-detail.service';
import { ProfileService } from './profile.service';

@NgModule({
    imports  : [
        UserDetailStoreModule,
        UserDetailModule
    ],
    providers: [
        ProfileService
    ]
})
export class ProfileCommonModule { }
