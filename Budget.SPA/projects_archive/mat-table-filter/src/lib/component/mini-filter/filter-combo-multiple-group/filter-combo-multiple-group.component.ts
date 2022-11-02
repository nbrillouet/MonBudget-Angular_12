import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Select } from '@corporate/model';
import { FilterComboMultipleGroup } from '../../../model/filters/mini-filter/combo-multiple.filters.model';

@Component({
  selector: 'lib-filter-combo-multiple-group',
  templateUrl: './filter-combo-multiple-group.component.html',
  styleUrls: ['./filter-combo-multiple-group.component.scss']
})
export class FilterComboMultipleGroupComponent implements OnInit {
  @Input() filterComboMultipleGroup: FilterComboMultipleGroup;
  @Output() applyFilterComboMultipleGroup=new EventEmitter<Select[]>();

  comboMultipleGroupForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {

    this.comboMultipleGroupForm = this._formBuilder.group({
      comboMultipleGroup: [this.filterComboMultipleGroup.combos.listSelected]
    });

    this.comboMultipleGroupForm.valueChanges.subscribe((val)=>{
      if(!this.sameMembers(this.filterComboMultipleGroup.combos.listSelected,val.comboMultipleGroup)) {
        this.filterComboMultipleGroup.combos.listSelected = val.comboMultipleGroup;
        this.applyFilterComboMultipleGroup.emit(this.filterComboMultipleGroup.combos.listSelected);
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
  //   this.applyFilterComboMultipleGroup.emit(this.filterComboMultipleGroup.combos.listSelected);

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
