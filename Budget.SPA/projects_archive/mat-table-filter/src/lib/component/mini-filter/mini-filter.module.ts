import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material.module';
import { SharedModule } from '../../shared.module';
import { FilterAmountComponent } from './filter-amount/filter-amount.component';
import { FilterComboMultipleGroupComponent } from './filter-combo-multiple-group/filter-combo-multiple-group.component';
import { FilterComboMultipleComponent } from './filter-combo-multiple/filter-combo-multiple.component';
import { FilterDateRangeComponent } from './filter-date-range/filter-date-range.component';
import { FilterLabelComponent } from './filter-label/filter-label.component';
import { FilterMovementComponent } from './filter-movement/filter-movement.component';
import { FilterNumberRangeComponent } from './filter-number-range/filter-number-range.component';

@NgModule({
  imports: [
    SharedModule,
    AngularMaterialModule
  ],
  declarations: [
    FilterAmountComponent,
    FilterComboMultipleComponent,
    FilterComboMultipleGroupComponent,
    FilterLabelComponent,
    FilterMovementComponent,
    FilterDateRangeComponent,
    FilterNumberRangeComponent
  ],
  exports:      [
    FilterAmountComponent,
    FilterComboMultipleComponent,
    FilterComboMultipleGroupComponent,
    FilterLabelComponent,
    FilterMovementComponent,
    FilterDateRangeComponent,
    FilterNumberRangeComponent
  ],
})
export class MiniFilterModule { }
