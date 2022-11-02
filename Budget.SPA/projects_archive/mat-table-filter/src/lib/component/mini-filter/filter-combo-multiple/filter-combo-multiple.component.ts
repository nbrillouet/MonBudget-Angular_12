import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Select } from '@corporate/model';
import { FilterComboMultiple } from '../../../model/filters/mini-filter/combo-multiple.filters.model';

@Component({
  selector: 'lib-filter-combo-multiple',
  templateUrl: './filter-combo-multiple.component.html',
  styleUrls: ['./filter-combo-multiple.component.scss']
})
export class FilterComboMultipleComponent implements OnInit {
  @Input() filterComboMultiple: FilterComboMultiple;
  @Output() applyFilterComboMultiple=new EventEmitter<Select[]>();

  comboMultipleForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {

    this.comboMultipleForm = this._formBuilder.group({
      comboMultiple: [this.filterComboMultiple.combos.listSelected]
    });

    this.comboMultipleForm.valueChanges.subscribe((val)=>{
      if(!this.sameMembers(this.filterComboMultiple.combos.listSelected,val.comboMultiple)){
        // this.filterComboMultiple.combos.listSelected = val.comboMultiple;
        this.applyFilterComboMultiple.emit(val.comboMultiple);
      }
    });

  }

  sameMembers(item1, item2): boolean {
    if(item1 && item1.sort().join(',')=== item2.sort().join(',')) {
        return true;
    }
    return false;
  }

  // applyFilter(){
  //   this.applyFilterComboMultiple.emit(this.filterComboMultiple.combos.listSelected);

  //   //suppression du menu
  //   var element=document.getElementsByClassName("content-filter").item(0);
  //   element.parentElement.remove();
  // }

   compareObjects(o1: Select, o2: Select): any {
     return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  // getFontSize() {
  //   return Math.max(10, 10);
  // }

}
