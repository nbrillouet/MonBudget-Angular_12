import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableFilter, TypeButtonInfo } from '@corporate/mat-table-filter';
import { EnumOperationsUrl } from 'app/model/enum/enum-operations.enum';
import { OTF_COLUMNS } from 'app/services/Referential/operations/operation-type-family/table/otf-columns';
import { OtfTableService } from 'app/services/Referential/operations/operation-type-family/table/otf-table.service';

@Component({
    selector       : 'otf-table',
    templateUrl    : './otf-table.component.html',
    encapsulation  : ViewEncapsulation.None
})
export class OtfTableComponent implements OnInit, OnDestroy {
    matTableFilter: MatTableFilter;

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        public _otfTableService: OtfTableService
    )
    {
        this.matTableFilter = {
            columns: OTF_COLUMNS,
            filterSelection$: this._otfTableService._selectionService.state$,
            filterSelected$: this._otfTableService._selectedService.state$,
            table$: this._otfTableService.state$,
            toolbar: null,
            clickOnRow: false
        };

    }

    ngOnInit(): void {
        console.log('operation type family here');
    }

    ngOnDestroy(): void {

    }

    onRowClick($event): void {

    }

    onButtonClick(typeButtonInfo: TypeButtonInfo): void {
        this._router.navigate([`${typeButtonInfo.row.id}/${EnumOperationsUrl.operationType}`], {relativeTo: this._activatedRoute});
    }

}
