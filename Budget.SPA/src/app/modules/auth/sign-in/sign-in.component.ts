import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { Store } from '@ngxs/store';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignInComponent implements OnInit
{
    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signInForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        public _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _store: Store
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._authService.authState$.subscribe((x)=> {
            if(x.loader['login']?.loaded) {
                this.signInForm.controls['username'].enable({ onlySelf: true, emitEvent: false });
                this.signInForm.controls['password'].enable({ onlySelf: true, emitEvent: false });
            }
        });

        // this._authService.authState$
        // Create the form
        this.signInForm = this._formBuilder.group({
            username  : ['', [Validators.required]],
            password  : ['', Validators.required],
            rememberMe: ['']
        });

        // this.authState$.subscribe((x)=>{
        //     if(x?.loader['login']?.loaded) {
        //         const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

        //         // Navigate to the redirect url
        //         this._router.navigateByUrl(redirectURL);
        //      }
        // });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void
    {
        this.signInForm.controls['username'].disable({ onlySelf: true, emitEvent: false });
        this.signInForm.controls['password'].disable({ onlySelf: true, emitEvent: false });

        this._authService.login({username: this.signInForm.value.username, password: this.signInForm.value.password});
    }
}
