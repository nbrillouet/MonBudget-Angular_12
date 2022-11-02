import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'environments/environment';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { Options, SimpleNotificationsModule } from 'angular2-notifications';
import { AccountOwnerModule } from './modules/main/pages/interaction/account-owner/account-owner.module';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { CustomDatePickerAdapter, CUSTOM_DATE_FORMATS } from './core/date-adapter/date-adapter';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeEn, 'en');
registerLocaleData(localeFr, 'fr');

const simpleNotificationOptions = {
    position: ['top', 'right'],
    animate: 'fromTop',
    timeOut: 30000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
    clickIconToClose: false
} as Options;

const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    enableTracing: false
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({}),

        // internal module
        AccountOwnerModule,
        NgxsModule.forRoot([], { developmentMode: !environment.production }),
        NgxsFormPluginModule.forRoot(),
        SimpleNotificationsModule.forRoot({ ...simpleNotificationOptions })


    ],
    providers   : [
        {provide: DateAdapter, useClass: CustomDatePickerAdapter},
        {provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS}
        // AuthGuard,
        // UserAuthService,
        // AccountOwnerService,

        // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // {provide: DateAdapter, useClass: CustomDatePickerAdapter},
        // {provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS},
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
