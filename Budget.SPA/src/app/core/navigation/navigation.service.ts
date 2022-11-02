import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Navigation } from 'app/core/navigation/navigation.types';
import { NavigationLoaderService } from './navigation.loader.service';
import { UserForLogged } from 'app/model/referential/user/user.model';


@Injectable({
    providedIn: 'root'
})
export class NavigationService
{
    private _navigation: ReplaySubject<Navigation> = new ReplaySubject<Navigation>(1);

    /**
     * Constructor
     */
    constructor(
        private _navigationLoaderService: NavigationLoaderService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for navigation
     */
    get navigation$(): Observable<Navigation>
    {
        return this._navigation.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all navigation data
     */
    get(user: UserForLogged): Navigation
    {
        const nav = this._navigationLoaderService.getNavigation(user);
        this._navigation.next(nav);
        return nav;
    }

}
