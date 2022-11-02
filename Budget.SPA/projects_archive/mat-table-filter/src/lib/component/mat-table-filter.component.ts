import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, OnDestroy, AfterViewInit, HostListener } from '@angular/core';
import { Row, Column, MatTableFilter, ColumnFilter } from '../model/filters/mat-table-filter.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { EnumFilterType, EnumStyleType } from '../model/filters/mat-table-filter.enum';
import { Subscription } from 'rxjs';
import { FilterComboMultiple, FilterComboMultipleGroup } from '../model/filters/mini-filter/combo-multiple.filters.model';
import { FilterDateRange } from '../model/filters/mini-filter/date-range.filter.model';
import { FilterNumberRange } from '../model/filters/mini-filter/number-range.filter.model';
import { Datas } from '@corporate/model';

@Component({
  selector: 'lib-mat-table-filter',
  templateUrl: './mat-table-filter.component.html',
  styleUrls: ['./mat-table-filter.component.scss']
})
export class MatTableFilterComponent implements OnInit, OnDestroy{
  @Input() matTableFilter: MatTableFilter;

  @Output() changeFilterSelected = new EventEmitter<any>();
  @Output() changeFilterSelection = new EventEmitter<any>();
  @Output() clickButtonIcon = new EventEmitter<Row>();
  @Output() rowClickEvent = new EventEmitter<Row>();
  @Output() toolbarAddItemEvent = new EventEmitter<null>();
  @Output() toolbarDeleteItemsEvent = new EventEmitter<number[]>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable,{ read: ElementRef } ) private matTableRef: ElementRef;

  $filterSelection$: Subscription;
  $filterSelected$: Subscription;
  $table$: Subscription;

  rows: Row[];
  filterSelected: any;
  filterSelection: any;
  templateFor: string;
  enumFilterType= EnumFilterType;
  enumStyleType = EnumStyleType;
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<Row>();
  idCurrentRow: number;
  onloading: boolean;
  columnToLoad: boolean;
  checkboxesDelete: number[]=[];
    resizeTimeout: boolean=false;
  constructor(
    private el: ElementRef,
    // private _router: Router
  ) {

   }

  ngOnInit(): void {
    this.matTableFilter.columns = JSON.parse(JSON.stringify(this.matTableFilter.columns));

    if(this.matTableFilter?.toolbar && this.matTableFilter.toolbar.buttonDelete.enabled) {
        this.addCheckboxDeleteColumn();
    }

    this.$table$ = this.matTableFilter.table$.subscribe((table)=>{
        this.loading(true);
        if(table?.loader['datas']?.loaded) {

          this.rows = this.getMatTableFilterRows(table);

          this.idCurrentRow = this.rows.length>0 ? this.rows[0].id : null;

          this.dataSource.data = this.rows;
          this.setTableResize();

          this.loading(false);
        }
    });

    this.$filterSelection$ = this.matTableFilter.filterSelection$.subscribe((selection)=>{
      if(selection?.loader['filter-selection']?.loaded) {

        this.filterSelection = selection.selection;

        if(!this.filterSelected) {
          this.columnToLoad=true;
        }
        else {
          this.matTableFilter.columns=this.getMatTableFilterColumns(selection.selection);
        }
      }
    });

    this.$filterSelected$ = this.matTableFilter.filterSelected$.subscribe((selected)=>{
      if(selected?.loader['filter-selected']?.loaded) {

        this.filterSelected = JSON.parse(JSON.stringify(selected.selected));

        if(this.columnToLoad) {
          this.getMatTableFilterColumns(this.filterSelection);
          this.columnToLoad = false;
        }
      }
    });
  }

  ngOnDestroy(): void {
    // this.$filterSelection$.unsubscribe();
    // this.$filterSelected$.unsubscribe();
    // this.$table$.unsubscribe();
  }

  getMatTableFilterRows(datas: Datas<any> ): Row[] {
    const tableRows: Row[] = [];

    for (const data of datas.datas) {
      const tableRow = new Row();

      for (const column of this.matTableFilter.columns) {
        const fields = column.field.split('-');
        let value= data[fields[0]];

        if(value && fields.length>1){
          for (let i=1; i<fields.length;i++) {
            value=value[fields[i]];
          }
        }

        tableRow[`${column.field}`] = value;
      }

      tableRows.push(tableRow);
    }
    return tableRows;
  }

  getMatTableFilterColumns(filterDatas): Column[] {
    this.setDisplayedColumns();

    for (const column of this.matTableFilter.columns) {
      const fields = column.field.split('-');
      const idx = fields.length-2;
      switch(column.filter.type) {
        case EnumFilterType.comboMultiple:
            column.filter.datas = { placeholder:fields[idx],combos:{list : filterDatas[`${fields[idx]}`], listSelected: this.filterSelected[`${fields[idx]}`] }} as FilterComboMultiple;
          break;
        case EnumFilterType.comboMultipleGroup:
          if(column.filter.datas) {
            const filterComboMultipleGroup  =  column.filter.datas as FilterComboMultipleGroup;
            filterComboMultipleGroup.combos.list = filterDatas[`${fields[idx]}`];
            column.filter.datas = filterComboMultipleGroup;
          }
          else {
            column.filter.datas = { placeholder:fields[idx],combos:{list : filterDatas[`${fields[idx]}`], listSelected:this.filterSelected[`${fields[idx]}`] }} as FilterComboMultipleGroup;
          }
          break;
        case EnumFilterType.dateRange:
            column.filter.datas = { placeholder:fields[idx],dateMin:null,dateMax:null } as FilterDateRange;
          break;
        case EnumFilterType.numberRange:
            column.filter.datas = { placeholder:fields[idx],suffixIcon:'euro_symbol',numberMin:null,numberMax:null } as FilterNumberRange;
          break;
      }
    }

    return this.matTableFilter.columns;
  }

  setDisplayedColumns(): void {
    this.matTableFilter.columns.forEach((column, index) => {

      this.displayedColumns[index] = column.field;
    });
  }

  //========================================================================
  //===================  RESIZE COLUMN =====================================
  //========================================================================

  setTableResize(): void {
    // this.resizeTimeout = true;

    if(!this.matTableRef) { return; }

    const maxWidth= this.matTableRef.nativeElement.clientWidth; //this.matTableWidth;
    const percentCols = this.matTableFilter.columns.filter(x=>!x.width.isFixed).length;
    const sumWidthFixedCols = this.matTableFilter.columns.filter(x=>x.width.isFixed).map(x=>x.width.value).reduce((a, b) => a + b, 0);

    const leaveWidth=maxWidth-sumWidthFixedCols;
    const unitWidth=leaveWidth/percentCols;

    this.matTableFilter.columns.forEach(( column, index) => {
        column.width.value = column.width.isFixed ? column.width.value : unitWidth;

        const elements = this.el.nativeElement.getElementsByClassName(`mat-column-${column.field}`);

        if(elements.length>0) {
            for(const element of elements) {
                element.style.flex = 'none';
                element.style.width = column.width.value + 'px';
            //     element.style.width = column.width.value + 'px';
            }
        //   for(let i=0; i<elements.length;i++) {
        //     elements[i].style.flex = 'none';
        //     elements[i].style.width = column.width.value + 'px';
        //   }
        }
    });
  }

  onResize($event): void {
    // if(!this.resizeTimeout) { this.setTableResize(); };
    // setTimeout(()=>{ this.resizeTimeout=false;}, 200);
    this.setTableResize();
  }


  //========================================================================
  //=============================  SORTING =================================
  //========================================================================
  onSortChangeEvent(event): void {
    this.loading(true);

    this.filterSelected['pagination'].currentPage=0;
    this.filterSelected['pagination'].sortColumn = this.sort.active;
    this.filterSelected['pagination'].sortDirection = this.sort.direction;

    this.changeFilterSelected.emit(this.filterSelected);
  }


  //========================================================================
  //=============================  FILTERING ===============================
  //========================================================================
  // hasFilterData(column:Column) {
  //   if(column.filter && column.filter.datas) {
  //     switch(column.filter.type) {
  //       case (this.enumFilterType.comboMultiple): {
  //         let datas = <FilterComboMultiple>column.filter.datas;
  //         return datas.combos.listSelected!=null && datas.combos.listSelected.length>0;
  //       }
  //       case (this.enumFilterType.comboMultipleGroup): {
  //         let datas = <FilterComboMultipleGroup>column.filter.datas;
  //         return datas.combos.listSelected!=null && datas.combos.listSelected.length>0;
  //       }
  //       case (this.enumFilterType.dateRange): {
  //         let datas = <FilterDateRange>column.filter.datas;
  //         return datas.dateMax!=null || datas.dateMin!=null;
  //       }
  //       case (this.enumFilterType.numberRange): {
  //         let datas = <FilterNumberRange>column.filter.datas;

  //         return datas.numberMax!=null || datas.numberMin!=null;
  //       }
  //       default: {
  //         return false;
  //       }
  //     }
  //   }

  //   return false;

  // }


  applyFilter(column: Column, $event): void {
    const fields=column.field.split('-');
    const idx = fields.length-2;

    switch(column.filter.type) {
      case EnumFilterType.comboMultiple:
        this.filterSelected[`${fields[idx]}`] = $event;
        break;
      case EnumFilterType.comboMultipleGroup:
        this.filterSelected[`${fields[idx]}`] = $event;
        break;
      case EnumFilterType.dateRange:
        const filter = $event as FilterDateRange;
        $event = (filter.dateMax==null && filter.dateMin==null) ? null : $event;
        this.filterSelected[`${fields[idx]}`]=$event;
        break;
      case EnumFilterType.numberRange:
        const filterNumber = $event as FilterNumberRange;
        $event = (filterNumber.numberMax==null && filterNumber.numberMin==null) ? null : $event;
        this.filterSelected[`${fields[idx]}`]=$event;
        break;
      case EnumFilterType.label:
          this.filterSelected[`${fields[idx]}`]=$event;
          break;
    }

    this.changeFilterSelected.emit(this.filterSelected);
    this.changeFilterSelection.emit(this.filterSelected);
  }

  filterIsEmpty(filter: ColumnFilter): boolean {
      switch(filter.type) {
        case EnumFilterType.comboMultiple:
        case EnumFilterType.comboMultipleGroup:
            const filterA = filter as any;
            return (!filterA.datas.combos.listSelected || !filterA.datas.combos.listSelected.length);
        case EnumFilterType.dateRange:
            const filterB = filter as any;
            return (!filterB.dateMax && !filterB.dateMin);
        case EnumFilterType.label:
            const filterC = filter as any;
            return !filterC.datas;
        case EnumFilterType.numberRange:
            const filterD = filter as any;
            return (!filterD.numberMax && !filterD.numberMin);
        default:
            return true;
      }
  }
  //========================================================================
  //============================  PAGINATION ===============================
  //========================================================================
//   onPageChangeEvent(event): void {
//       this.loading(true);

//       this.filterSelected['pagination'].currentPage = this.paginator.pageIndex;
//       this.filterSelected['pagination'].nbItemsPerPage = this.paginator.pageSize;
//       this.changeFilterSelected.emit(this.filterSelected);
//   }

  onClickButtonIcon($event: Row): void {

    this.clickButtonIcon.emit($event);
  }

  loading(onloading: boolean): void{

    this.onloading=onloading;

    if(onloading) {
      this.dataSource.data=[];
    }
  }


  // pour la sélection d'un texte dans le tableau
  public mouseEvent: MouseEvent
  public txtmouseEvent: boolean = false
  public activeClick: number = -1

  public onClickLigne(event: MouseEvent, index: number, row: any): void {

      if (this.txtmouseEvent === false) {
          if (Math.abs(this.mouseEvent.clientX - event.clientX) < 10 && Math.abs(this.mouseEvent.clientY - event.clientY) < 10) {
              this.activeClick = index;

              this.rowClickEvent.emit(row);
          }
          else {
              this.txtmouseEvent = true;
          }
      }
      else {
          this.txtmouseEvent = false;
      }
  }

  onMouseDown(event: MouseEvent): void {
    this.mouseEvent = event;
  }

  //========================================================================
  //============================  TOOLBAR    ===============================
  //========================================================================
  addCheckboxDeleteColumn(): void {
    // eslint-disable-next-line max-len
    const chkColumn = {
        field: 'checkboxDelete',
        label:'',
        isSortable:false,
        width:{isFixed:true,value:60},
        filter: { type:EnumFilterType.none, datas: null },
        pipe: false,
        style:{type:EnumStyleType.checkboxDelete,datas:null }
    } as Column;
    // const tutu = toto as Column;

    const checkboxDelete = chkColumn;
    // Column = {field: 'checkboxDelete',label:'',isSortable:false,width:{isFixed:true,value:60}, filter: { type:EnumFilterType.none, datas: null }, pipe: false, style:{type:EnumStyleType.checkboxDelete,datas:null } };
    this.matTableFilter.columns.unshift(checkboxDelete);
  }

  onCheckboxDeleteChange($event, id: number): void {
    if($event.checked) {
      this.checkboxesDelete.push(id);
    }
    else
    {
      const index = this.checkboxesDelete.indexOf(id);
      if (index > -1) {
        this.checkboxesDelete.splice(index, 1);
      }
    }
  }

  addItem(): void {
    this.toolbarAddItemEvent.emit();
  }

  deleteItems(idList: number[]): void {
    this.toolbarDeleteItemsEvent.emit(idList);
    this.checkboxesDelete=[];
  }

}
