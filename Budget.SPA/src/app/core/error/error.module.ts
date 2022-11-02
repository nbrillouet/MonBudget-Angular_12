import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ErrorInterceptor } from './error.interceptor';

@NgModule({
    imports  : [
        // AuthStoreModule,

        // UserLoggedModule
    ],
    providers: [
        // AuthService,
        {
            provide : HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi   : true
        }
    ],
})
export class ErrorModule { }
