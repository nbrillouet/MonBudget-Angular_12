import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ComboSimple, Select } from '@model-generic';

@Component({
  selector: 'lib-filter-movement',
  templateUrl: './filter-movement.component.html',
  styleUrls: ['./filter-movement.component.scss']
})
export class FilterMovementComponent implements OnInit {
  @Input() movement: ComboSimple<Select>;
  @Output() applyFilterMovement=new EventEmitter<Select>();

  movementForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {

    this.movementForm = this._formBuilder.group({
      movement: [this.movement.selected]
    });

    this.movementForm.valueChanges.subscribe((val)=>{
      this.movement.selected = val.movement;
    });

  }


  applyFilter(): void{
    this.applyFilterMovement.emit(this.movement.selected);

    //suppression du menu
    const element=document.getElementsByClassName('content-filter').item(0);
    element.parentElement.remove();
  }

   compareObjects(o1: Select, o2: Select): any {
     return o1 && o2 ? o1.id === o2.id : o1 === o2;

  }

  getFontSize(): number {
    return Math.max(10, 10);
  }

}
