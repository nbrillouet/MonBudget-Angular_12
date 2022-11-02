import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';
import { MatTableFilterPaginatorComponent } from './component/mat-table-filter-paginator/mat-table-filter-paginator.component';
import { MatTableFilterToolbarComponent } from './component/mat-table-filter-toolbar/mat-table-filter-toolbar.component';
import { MatTableFilterComponent } from './component/mat-table-filter.component';
import { MiniFilterModule } from './component/mini-filter/mini-filter.module';
import { DateFormatPipe } from './pipe/pipe-date';
import { SharedModule } from './shared.module';

@NgModule({
    imports: [
        SharedModule,
        AngularMaterialModule,
        MiniFilterModule
        // ObserversModule
    ],
    declarations: [
        MatTableFilterComponent,
        MatTableFilterToolbarComponent,
        MatTableFilterPaginatorComponent,
        // ResizeObserverDirective,
        DateFormatPipe
    ],
    exports:      [
        MatTableFilterToolbarComponent,
        MatTableFilterComponent,
        MatTableFilterPaginatorComponent
     ],
    providers : [
        DateFormatPipe
    ]
  })
  export class MatTableFilterModule { }
