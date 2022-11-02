import { Injectable } from '@angular/core';
import { Datas } from '@corporate/model';
import { Select } from '@ngxs/store';
import { FilterOtTableSelected } from 'app/model/filters/operation-type.filter';
import { OtForTable } from 'app/model/referential/operation-type.model';
import { OtTableState } from 'app/state/referential/operation-type/ot-table/ot-table.state';
import { Observable } from 'rxjs';
import { OtTableFilterSelectedService } from './ot-table-filter-selected.service';
import { OtTableFilterSelectionService } from './ot-table-filter-selection.service';

@Injectable({ providedIn: 'root' })
export class OtTableService
{
    @Select(OtTableState.get) state$: Observable<Datas<OtForTable[]>>;

    /**
     * Constructor
     */
    constructor(
        public _selectedService: OtTableFilterSelectedService,
        public _selectionService: OtTableFilterSelectionService
    )
    {
        this.state$.subscribe((x) => {
            if(x?.loader['datas']?.loaded) {
                console.log('datas', x.datas);
            }
        });
    }

    public applyFilterSelected(selected: FilterOtTableSelected): void {
        this._selectedService.applyFilter(selected);
    }

    public applyFilterSelection(selected: FilterOtTableSelected): void {
        this._selectionService.applyFilter(selected);
    }

    // public load(): void {
    //     // this._selectedService.load();
    // }
}
