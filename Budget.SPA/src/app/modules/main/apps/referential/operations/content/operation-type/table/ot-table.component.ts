import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableFilter, TypeButtonInfo } from '@corporate/mat-table-filter';
import { EnumOperationsUrl } from 'app/model/enum/enum-operations.enum';
import { OT_COLUMNS } from 'app/services/Referential/operations/operation-type/table/ot-columns';
import { OtTableService } from 'app/services/Referential/operations/operation-type/table/ot-table.service';

@Component({
    selector       : 'ot-table',
    templateUrl    : './ot-table.component.html',
    encapsulation  : ViewEncapsulation.None
})
export class OtTableComponent implements OnInit, OnDestroy {
    matTableFilter: MatTableFilter;

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        public _otTableService: OtTableService

    )
    {
        this.matTableFilter = {
            columns: OT_COLUMNS,
            filterSelection$: this._otTableService._selectionService.state$,
            filterSelected$: this._otTableService._selectedService.state$,
            table$: this._otTableService.state$,
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
        this._router.navigate([`${typeButtonInfo.row.id}/${EnumOperationsUrl.operation}`], {relativeTo: this._activatedRoute});
    }

}
