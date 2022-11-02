import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FuseCardModule } from '@fuse/components/card';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { GMAP_KEY } from 'app/core/config/gmap-api-key.model';
import { SharedModule } from 'app/shared/shared.module';
import { GMapDetailStoreModule } from 'app/state/g-map/g-map.store.module';
import { GMapSearchComponent } from './g-map-search.component';
import { GMapSearchService } from './g-map-search.service';

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      FuseCardModule,
      AngularMaterialModule,
      NgxsFormPluginModule,
      AgmCoreModule.forRoot({
        apiKey: GMAP_KEY
      }),
      GMapDetailStoreModule
    ],
    declarations: [GMapSearchComponent],
    exports:      [GMapSearchComponent],
    providers :   [GMapSearchService]
  })
  export class GMapModule { }
