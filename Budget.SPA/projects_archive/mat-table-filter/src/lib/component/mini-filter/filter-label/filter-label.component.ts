import { OnInit, Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'lib-filter-label',
  templateUrl: './filter-label.component.html',
  styleUrls: ['./filter-label.component.scss']
})
export class FilterLabelComponent implements OnInit {
  @Input() filterLabel: string;
  @Output() applyLabelFilter=new EventEmitter<string>();

  stopPropagation: boolean=true;
  labelForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {

    this.labelForm = this._formBuilder.group({
      label: [this.filterLabel]
      });

    this.labelForm.valueChanges.pipe(
      debounceTime(300)).subscribe((val)=> {
        this.filterLabel = val.label;
        this.applyLabelFilter.emit(this.filterLabel);
      });
  }

  clear(): void {
    this.labelForm.controls['label'].reset();

    this.filterLabel = null;
    this.applyLabelFilter.emit(this.filterLabel);
  }

  // onFocusOut() {
  //   this.filterLabel = this.labelForm.controls['label'].value;

  //   this.applyLabelFilter.emit(this.filterLabel);
  // }

}
