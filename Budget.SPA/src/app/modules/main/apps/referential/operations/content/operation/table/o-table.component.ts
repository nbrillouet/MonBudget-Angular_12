import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableFilter, TypeButtonInfo } from '@corporate/mat-table-filter';
import { O_COLUMNS } from 'app/services/Referential/operations/operation/table/o-columns';
import { OTableService } from 'app/services/Referential/operations/operation/table/o-table.service';

@Component({
    selector       : 'o-table',
    templateUrl    : './o-table.component.html',
    encapsulation  : ViewEncapsulation.None
})
export class OTableComponent implements OnInit, OnDestroy {
    matTableFilter: MatTableFilter;

    constructor(
        public _oTableService: OTableService

    )
    {
        this.matTableFilter = {
            columns: O_COLUMNS,
            filterSelection$: this._oTableService._selectionService.state$,
            filterSelected$: this._oTableService._selectedService.state$,
            table$: this._oTableService.state$,
            toolbar: null,
            clickOnRow: false
        };

    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }

    onRowClick($event): void {

    }

    onButtonClick(typeButtonInfo: TypeButtonInfo): void {
        console.log('typeButtonInfo', typeButtonInfo);
    }

}
