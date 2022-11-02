
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterAmount } from '../../../model/filters/mini-filter/amount.filter.model';

@Component({
  selector: 'lib-filter-amount',
  templateUrl: './filter-amount.component.html',
  styleUrls: ['./filter-amount.component.scss']
})
export class FilterAmountComponent implements OnInit {
  @Input() filterAmount: FilterAmount;
  @Output() applyFilterAmount=new EventEmitter<FilterAmount>();

  amountForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder

  ) {

  }

  ngOnInit(): void {
    // this.stopPropagation=true;
    this.amountForm = this._formBuilder.group({
      amountMin: [this.filterAmount.amountMin],
      amountMax: [this.filterAmount.amountMax]
      });

    this.amountForm.valueChanges.subscribe((val)=>{

      this.filterAmount = val;

    });

  }

   applyFilter(): void{
        this.applyFilterAmount.emit(this.filterAmount);

        //suppression du menu
        const element=document.getElementsByClassName('content-filter').item(0);
        element.parentElement.remove();
   }

}
