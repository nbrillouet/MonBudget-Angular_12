import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
// import { FilterNumberRange } from 'app/main/_models/filters/mini-filter/number-range.filter';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FilterNumberRange } from '../../../model/filters/mini-filter/number-range.filter.model';
// import { FilterNumberRange } from 'app/model/filters/mini-filter/number-range.filter';

// styleUrls: ['./filter-number-range.component.scss']
@Component({
  selector: 'lib-filter-number-range',
  templateUrl: './filter-number-range.component.html',
  styleUrls: ['./filter-number-range.component.scss']
})
export class FilterNumberRangeComponent implements OnInit {

  @Input() filterNumberRange: FilterNumberRange;
  @Output() applyFilter=new EventEmitter<FilterNumberRange>();

  numberRangeForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder

  ) {

  }

  ngOnInit(): void {
    // this.stopPropagation=true;
    this.numberRangeForm = this._formBuilder.group({
      numberMin: [this.filterNumberRange.numberMin],
      numberMax: [this.filterNumberRange.numberMax]
      });

    // this.numberRangeForm.valueChanges.subscribe(val=>{
    //   this.filterNumberRange.numberMin = val.numberMin;
    //   this.filterNumberRange.numberMax = val.numberMax;

    //   setTimeout(x=> {
    //     this.applyFilter.emit(this.filterNumberRange);
    //   },500);

    // });

  }

  onFocusOut(): void {
    this.filterNumberRange.numberMin = this.numberRangeForm.controls['numberMin'].value;
    this.filterNumberRange.numberMax = this.numberRangeForm.controls['numberMax'].value;

    this.applyFilter.emit(this.filterNumberRange);
  }
  //  applyFilter(){
  //   this.applyFilter.emit(this.filterNumberRange);

  //   //suppression du menu
  //   var element=document.getElementsByClassName("content-filter").item(0);
  //   element.parentElement.remove();


  //  }

  clearMin(): void {
    this.numberRangeForm.controls['numberRangeMin'].reset();

    this.filterNumberRange.numberMin = null;
    this.applyFilter.emit(this.filterNumberRange);
  }

  clearMax(): void {
      this.numberRangeForm.controls['numberRangeMax'].reset();

      this.filterNumberRange.numberMax = null;
      this.applyFilter.emit(this.filterNumberRange);
  }

}
