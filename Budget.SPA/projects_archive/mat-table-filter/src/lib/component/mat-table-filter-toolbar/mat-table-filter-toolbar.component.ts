import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { FuseConfirmationService } from '@fuse/services/confirmation';
import { Subject } from 'rxjs';
import { Toolbar } from '../../model/filters/mat-table-filter.model';
// import { Toolbar } from '../../model/mat-table-filter.model';

@Component({
  selector: 'lib-mat-table-filter-toolbar',
  templateUrl: './mat-table-filter-toolbar.component.html'

})
export class MatTableFilterToolbarComponent implements OnInit, OnDestroy {
  @Input()  toolbar: Toolbar;
  @Input()  checkboxesDelete: number[];
  @Output() addItemEvent = new EventEmitter<null>();
  @Output() deleteItemsEvent = new EventEmitter<number[]>();

//   confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  private _unsubscribeAll: Subject<any>;
//   fuseConfig: any;

  constructor(
    public _matDialog: MatDialog
    // private _fuseConfirmationService: FuseConfirmationService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(void 0);
    this._unsubscribeAll.complete();
  }

  addItem(): void{
    this.addItemEvent.emit();
  }

  deleteItems(): void {
        // // Open the confirmation dialog
        // const confirmation = this._fuseConfirmationService.open({
        //     title  : 'Delete contact',
        //     message: 'Are you sure you want to delete this contact? This action cannot be undone!',
        //     actions: {
        //         confirm: {
        //             label: 'Delete'
        //         }
        //     }
        // });
        // confirmation.afterClosed().subscribe((result) => {
        //     if (result)
        //     {
        //       this.deleteItemsEvent.emit(this.checkboxesDelete);
        //     }
        //     // confirmation = null;
        // });
  }
}
