import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AssetService } from 'app/services/Referential/asset.service';
import { OtfApiService } from '../otf-api.service';
import { OtfTableFilterSelectedState } from './otf-table-filter-selected/otf-table-filter-selected.state';
import { OtfTableFilterSelectionState } from './otf-table-filter-selection/otf-table-filter-selection.state';
import { OtfTableState } from './otf-table.state';

@NgModule({
    declarations: [],
    imports     : [
        NgxsModule.forFeature([
            OtfTableFilterSelectedState,
            OtfTableFilterSelectionState,
            OtfTableState
        ])
    ],
    providers:[
        OtfApiService,
        AssetService
    ]
})

export class OtfTableStoreModule
{

}
