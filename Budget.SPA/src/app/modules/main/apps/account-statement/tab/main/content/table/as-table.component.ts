import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { AS_MODEL_2_COLUMNS } from 'app/services/account-statement/account-statement-import-file/table/constants';
import { AsMainService } from 'app/services/account-statement/account-statement/main/as-main.service';
import { AsTableService } from 'app/services/account-statement/account-statement/table/as-table.service';
import { MatTableFilter } from '@corporate/mat-table-filter';

@Component({
    selector       : 'as-table',
    templateUrl    : './as-table.component.html',
    encapsulation  : ViewEncapsulation.None
})
export class AsTableComponent implements OnInit, OnDestroy {
    matTableFilter: MatTableFilter;

    constructor(
        private _asMainService: AsMainService,
        public _asTableService: AsTableService,
        private _authService: AuthService,
        private _activatedRoute: ActivatedRoute
    )
    {
        this.matTableFilter = {
            columns: AS_MODEL_2_COLUMNS,
            filterSelection$: this._asTableService._selectionService.state$,
            filterSelected$: this._asTableService._selectedService.state$,
            table$: this._asTableService.state$,
            toolbar: null
        };
        // this._asMainService._selectedService.change(x=>x.user, this._authService.user);
    }

    ngOnInit(): void {
        // this._activatedRoute.params.subscribe((routeParams) => {
        //     this._asMainService._selectedService.change(x=>x.idAccount, routeParams['idAccount']);
        // });
    }

    ngOnDestroy(): void {

    }

    onRowClick($event): void {
        // this._asifDetailService.loadAsifDetail({ id: $event.id});

        // const url = this._activatedRoute['_routerState'].snapshot.url;
        // this._router.navigate([`${url}/detail/`, $event.id]);
    }

}
