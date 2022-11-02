import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'app/core/auth/auth.interceptor';
import { AuthService } from './auth.service';
import { AuthStoreModule } from 'app/state/user/auth/auth.store.module';
import { UserLoggedModule } from 'app/services/Referential/user/user-logged/user-logged.module';

@NgModule({
    imports  : [
        AuthStoreModule,
        UserLoggedModule
    ],
    providers: [
        AuthService,
        {
            provide : HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi   : true
        }
    ],

})
export class AuthModule { }
