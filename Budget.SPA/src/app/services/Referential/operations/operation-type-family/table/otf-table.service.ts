import { Injectable } from '@angular/core';
import { Datas } from '@corporate/model';
import { Select } from '@ngxs/store';
import { FilterOtfTableSelected } from 'app/model/filters/operation-type-family.filter';
import { OtfForTable } from 'app/model/referential/operation-type-family.model';
import { OtfTableState } from 'app/state/referential/operation-type-family/otf-table/otf-table.state';
import { Observable } from 'rxjs';
import { OtfTableFilterSelectedService } from './otf-table-filter-selected.service';
import { OtfTableFilterSelectionService } from './otf-table-filter-selection.service';

@Injectable({ providedIn: 'root' })
export class OtfTableService
{
    @Select(OtfTableState.get) state$: Observable<Datas<OtfForTable[]>>;

    /**
     * Constructor
     */
    constructor(
        public _selectedService: OtfTableFilterSelectedService,
        public _selectionService: OtfTableFilterSelectionService
    )
    {
        this.state$.subscribe((x) => {
            if(x?.loader['datas']?.loaded) {
                console.log('datas', x.datas);
            }
        });
    }

    public applyFilterSelected(selected: FilterOtfTableSelected): void {
        this._selectedService.applyFilter(selected);
    }

    public applyFilterSelection(selected: FilterOtfTableSelected): void {
        this._selectionService.applyFilter(selected);
    }

    // public load(): void {
    //     this._selectedService.load();
    // }
}
