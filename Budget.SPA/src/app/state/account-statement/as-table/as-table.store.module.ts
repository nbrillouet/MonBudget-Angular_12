import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { HelperFilterService } from 'app/services/helperFilter.service';
import { AsApiService } from '../as-api.service';
import { AsTableFilterSelectedState } from './as-table-filter-selected/as-table-filter-selected.state';
import { AsTableFilterSelectionState } from './as-table-filter-selection/as-table-filter-selection.state';
import { AsTableState } from './as-table.state';

@NgModule({
    declarations: [],
    imports     : [
        NgxsModule.forFeature([
            AsTableFilterSelectedState,
            AsTableFilterSelectionState,
            AsTableState
        ])
    ],
    providers:[
        HelperFilterService,
        AsApiService
    ]
})

export class AsTableStoreModule
{

}
