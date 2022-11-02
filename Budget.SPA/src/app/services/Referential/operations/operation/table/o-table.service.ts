import { Injectable } from '@angular/core';
import { Datas } from '@corporate/model';
import { Select } from '@ngxs/store';
import { FilterOTableSelected } from 'app/model/filters/operation.filter';
import { OForTable } from 'app/model/referential/operation.model';
import { OTableState } from 'app/state/referential/operation/operation-table/operation-table.state';
import { Observable } from 'rxjs';
import { OTableFilterSelectedService } from './o-table-filter-selected.service';
import { OTableFilterSelectionService } from './o-table-filter-selection.service';

@Injectable({ providedIn: 'root' })
export class OTableService
{
    @Select(OTableState.get) state$: Observable<Datas<OForTable[]>>;

    /**
     * Constructor
     */
    constructor(
        public _selectedService: OTableFilterSelectedService,
        public _selectionService: OTableFilterSelectionService
    )
    {
        this.state$.subscribe((x) => {
            if(x?.loader['datas']?.loaded) {
                console.log('datas', x.datas);
            }
        });
    }

    public applyFilterSelected(selected: FilterOTableSelected): void {
        this._selectedService.applyFilter(selected);
    }

    public applyFilterSelection(selected: FilterOTableSelected): void {
        this._selectionService.applyFilter(selected);
    }
}
