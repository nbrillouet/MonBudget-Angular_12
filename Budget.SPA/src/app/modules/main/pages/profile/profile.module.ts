import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseCardModule } from '@fuse/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { ProfileComponent } from 'app/modules/main/pages/profile/profile.component';
import { profileRoutes } from 'app/modules/main/pages/profile/profile.routing';
import { UserDetailStoreModule } from 'app/state/user/user-detail/user-detail.store.module';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { TranslocoModule } from '@ngneat/transloco';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserDetailModule } from 'app/services/Referential/user/user-detail/user-detail.module';
import { ProfileCommonModule } from 'app/services/Referential/user/profile/profile.module';
import { GMAP_KEY } from 'app/core/config/gmap-api-key.model';
import { AgmCoreModule } from '@agm/core';
import { ProfileAboutMeComponent } from './profile-information/profile-about-me/profile-about-me.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { ProfileLocalisationComponent } from './profile-information/profile-localisation/profile-localisation.component';
import { ProfilePreferenceComponent } from './profile-information/profile-preference/profile-preference.component';
import { ProfileAboutMeReadComponent } from './profile-information/profile-about-me/profile-about-me-read/profile-about-me-read.component';
import { ProfileAboutMeEditComponent } from './profile-information/profile-about-me/profile-about-me-edit/profile-about-me-edit.component';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileInformationComponent,
        ProfileAboutMeComponent,
        ProfileAboutMeReadComponent,
        ProfileAboutMeEditComponent,
        ProfileLocalisationComponent,
        ProfilePreferenceComponent
    ],
    imports     : [
        RouterModule.forChild(profileRoutes),
        AgmCoreModule.forRoot({
            apiKey: GMAP_KEY
          }),
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatTooltipModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        FuseCardModule,
        SharedModule,

        ProfileCommonModule,
        TranslocoModule,
        NgxsFormPluginModule
    ]
})
export class ProfileModule
{
}
