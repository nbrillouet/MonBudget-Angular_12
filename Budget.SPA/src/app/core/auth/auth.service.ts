import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { Login } from 'app/state/user/auth/auth.action';
import { environment } from 'environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ClearNavigation } from 'app/state/navigation/navigation.action';
import { ClearUserDetail, LoadUserDetail } from 'app/state/user/user-detail/user-detail.action';
import { AuthState } from 'app/state/user/auth/auth.state';
import { Select, Store } from '@ngxs/store';
import { UserLoggedService } from 'app/services/Referential/user/user-logged/user-logged.service';
import { NavigationService } from '../navigation/navigation.service';
import { DataInfo } from '@corporate/model';
import { UserForAuth, UserForPasswordChange, UserForRegister } from 'app/model/referential/user/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService
{
    @Select(AuthState.get) public authState$: Observable<DataInfo<UserForAuth>>;

    private baseUrl = environment.apiUrl;


    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _store: Store,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _userLoggedService: UserLoggedService,
        private _navigationService: NavigationService
    )
    {
        this.authState$.subscribe((x)=>{
            if(x?.loader['login']?.loaded) {
                this.accessToken = x.datas.token;
                this.user = x.datas;
                //chargement du user
                this._userLoggedService.load({ idUser: x.datas.id });

                // //redirection;
                // const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
                // // Navigate to the redirect url
                // this._router.navigateByUrl(redirectURL);
             }
        });

        this._navigationService.navigation$.subscribe((x)=>{
            if(x) {
                //userLogged + navigation sont chargé ==> redirection
                //redirection;
                const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
                // Navigate to the redirect url
                this._router.navigateByUrl(redirectURL);
            }
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string)
    {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string
    {
        return localStorage.getItem('accessToken') ?? '';
    }

    /**
     * Setter & getter for access token
     */
     set user(userForAuth: UserForAuth)
     {
         localStorage.setItem('user', JSON.stringify(userForAuth));
     }

     get user(): UserForAuth
     {
        return JSON.parse(localStorage.getItem('user')) ?? '';
     }

    /**
     * Setter & getter for authenticated
     */
    //  set authenticated(isAuthenticated: boolean)
    //  {
    //      localStorage.setItem('accessToken', token);
    //  }

     get authenticated(): boolean
     {
         return localStorage.getItem('accessToken') ? true : false;
     }


    // // -----------------------------------------------------------------------------------------------------
    // // @ Public methods
    // // -----------------------------------------------------------------------------------------------------
    login(credentials: { username: string; password: string }): Observable<UserForAuth> {
        // Throw error, if the user is already logged in

        if ( this.authenticated )
        {
            return throwError('User is already logged in.');
        }
        this._store.dispatch(new Login(credentials));
    }

    register(userForRegister: UserForRegister): Observable<any>
    {
        return this._httpClient
            .post(this.baseUrl + 'auth/register', userForRegister);
    }

    accountActivation(code: string): any {
        return this._httpClient
            .get<any>(`${this.baseUrl}auth/account-activation/${code}`);
    }

    accountPasswordRecovery(mail: string): any {
        return this._httpClient
            .get<any>(`${this.baseUrl}auth/account-password-recovery/${mail}`);
     }

    changePassword(user: UserForPasswordChange): any {
        return this._httpClient
            .post<any>(`${this.baseUrl}auth/change-password`,user);
    }

    logout(): void {
        // remove user from local storage to log user out
        this._store.dispatch(new ClearNavigation());
        this._store.dispatch(new ClearUserDetail());
        localStorage.clear();

        this._router.navigate(['/pages/auth/login']);
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: { username: string; password: string }): Observable<any>
    {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }


    /**
     * Check the authentication status
     */
    check(): Observable<boolean>
    {
         // Check if the user is logged in
        if ( this.authenticated )
        {
            return of(true);
        }

        // Check the access token availability
        if ( !this.accessToken )
        {
            return of(false);
        }

        // Check the access token expire date
        if ( AuthUtils.isTokenExpired(this.accessToken) )
        {
            return of(false);
        }

        // If the access token exists and it didn't expire, sign in using it
        return this.signInUsingToken();
    }

    /**
        * Sign in using the access token
    */
    signInUsingToken(): Observable<any>
    {
        // Renew token
        return this._httpClient.post('api/auth/refresh-access-token', {
            accessToken: this.accessToken
        }).pipe(
            catchError(() =>

                // Return false
                of(false)
            ),
            switchMap((response: any) => {

                // Store the access token in the local storage
                this.accessToken = response.accessToken;

                // // Set the authenticated flag to true
                // this.authenticated = true;

                // // Store the user on the user service
                // this._userService.user = response.user;

                // Return true
                return of(true);
            })
        );
    }












    // /**
    //  * Forgot password
    //  *
    //  * @param email
    //  */
    // forgotPassword(email: string): Observable<any>
    // {
    //     return this._httpClient.post('api/auth/forgot-password', email);
    // }

    // /**
    //  * Reset password
    //  *
    //  * @param password
    //  */
    // resetPassword(password: string): Observable<any>
    // {
    //     return this._httpClient.post('api/auth/reset-password', password);
    // }

    // /**
    //  * Sign in
    //  *
    //  * @param credentials
    //  */
    // signIn(credentials: { username: string; password: string }): Observable<any>
    // {
    //     // Throw error, if the user is already logged in
    //     if ( this._authenticated )
    //     {
    //         return throwError('User is already logged in.');
    //     }

    //     return this._store.dispatch(new Login({username: credentials.username, password: credentials.password}));

    //     // return this._httpClient.post('api/auth/sign-in', credentials).pipe(
    //     //     switchMap((response: any) => {

    //     //         // Store the access token in the local storage
    //     //         this.accessToken = response.accessToken;

    //     //         // Set the authenticated flag to true
    //     //         this._authenticated = true;

    //     //         // Store the user on the user service
    //     //         this._userService.user = response.user;

    //     //         // Return a new observable with the response
    //     //         return of(response);
    //     //     })
    //     // );
    // }

    // /**
    //  * Sign in using the access token
    //  */
    // signInUsingToken(): Observable<any>
    // {
    //     // Renew token
    //     return this._httpClient.post('api/auth/refresh-access-token', {
    //         accessToken: this.accessToken
    //     }).pipe(
    //         catchError(() =>

    //             // Return false
    //             of(false)
    //         ),
    //         switchMap((response: any) => {

    //             // Store the access token in the local storage
    //             this.accessToken = response.accessToken;

    //             // Set the authenticated flag to true
    //             this._authenticated = true;

    //             // Store the user on the user service
    //             this._userService.user = response.user;

    //             // Return true
    //             return of(true);
    //         })
    //     );
    // }

    // /**
    //  * Sign out
    //  */
    // signOut(): Observable<any>
    // {
    //     // Remove the access token from the local storage
    //     localStorage.removeItem('accessToken');

    //     // Set the authenticated flag to false
    //     this._authenticated = false;

    //     // Return the observable
    //     return of(true);
    // }

    // /**
    //  * Sign up
    //  *
    //  * @param user
    //  */
    // signUp(user: { name: string; username: string; password: string; company: string }): Observable<any>
    // {
    //     return this._httpClient.post('api/auth/sign-up', user);
    // }

    // /**
    //  * Unlock session
    //  *
    //  * @param credentials
    //  */
    // unlockSession(credentials: { username: string; password: string }): Observable<any>
    // {
    //     return this._httpClient.post('api/auth/unlock-session', credentials);
    // }

    // /**
    //  * Check the authentication status
    //  */
    // check(): Observable<boolean>
    // {
    //     // Check if the user is logged in
    //     if ( this._authenticated )
    //     {
    //         return of(true);
    //     }

    //     // Check the access token availability
    //     if ( !this.accessToken )
    //     {
    //         return of(false);
    //     }

    //     // Check the access token expire date
    //     if ( AuthUtils.isTokenExpired(this.accessToken) )
    //     {
    //         return of(false);
    //     }

    //     // If the access token exists and it didn't expire, sign in using it
    //     return this.signInUsingToken();
    // }
}
