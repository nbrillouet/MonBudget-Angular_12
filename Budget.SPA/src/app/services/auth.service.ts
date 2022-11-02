// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Store } from '@ngxs/store';
// import { NotificationsService } from 'angular2-notifications';
// import { UserForAuth, UserForPasswordChange, UserForRegister } from 'app/model/user.model';
// import { ClearNavigation } from 'app/state/navigation/navigation.action';
// import { ClearUserDetail } from 'app/state/user/user-detail/user-detail.action';
// import { environment } from 'environments/environment';
// import { Observable } from 'rxjs';


// @Injectable()
// export class UserAuthService {
//     baseUrl = environment.apiUrl;

//     constructor(
//         private _httpClient: HttpClient,
//         private _store: Store,
//         private _notificationsService: NotificationsService,
//         private _router: Router
//         ) { }

//     login(username: string, password: string): Observable<UserForAuth> {
//         return this._httpClient
//             .post<UserForAuth>(`${this.baseUrl}auth/login`, { username:username, password:password });
//     }

//     register(userForRegister: UserForRegister): Observable<any>
//     {
//         return this._httpClient
//             .post(this.baseUrl + 'auth/register', userForRegister);
//     }

//     accountActivation(code: string): any {
//         return this._httpClient
//             .get<any>(`${this.baseUrl}auth/account-activation/${code}`);
//     }

//     accountPasswordRecovery(mail: string): any {
//         return this._httpClient
//             .get<any>(`${this.baseUrl}auth/account-password-recovery/${mail}`);
//      }

//     changePassword(user: UserForPasswordChange): any {
//         return this._httpClient
//             .post<any>(`${this.baseUrl}auth/change-password`,user);
//     }

//     logout(): void {
//         // remove user from local storage to log user out
//         this._store.dispatch(new ClearNavigation());
//         this._store.dispatch(new ClearUserDetail());
//         localStorage.clear();

//         this._notificationsService.info('logged out success','Vous êtes maintenant déconnecté');
//         this._router.navigate(['/pages/auth/login']);
//     }

//     // responseOfAccountOwner(encryptResponse: string) {
//     //     return this._httpClient
//     //           .get(`${this.baseUrl}auth/response-of-account-owner/${encodeURIComponent(encryptResponse)}`)
//     //           .map((response: IAccountOwner) => {
//     //               return response;
//     //           });

//     // }

// }
