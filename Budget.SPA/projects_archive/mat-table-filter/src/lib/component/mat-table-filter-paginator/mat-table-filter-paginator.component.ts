import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableFilter } from '../../model/filters/mat-table-filter.model';
import { Pagination } from '../../model/pagination.model';

@Component({
    selector: 'lib-mat-table-filter-paginator',
    templateUrl: './mat-table-filter-paginator.component.html'
  })
  export class MatTableFilterPaginatorComponent implements OnInit, OnDestroy{

    @Input() matTableFilter: MatTableFilter;

    @Output() changeFilterSelected = new EventEmitter<any>();

    @ViewChild(MatPaginator) paginator: MatPaginator;
    pagination: Pagination;
    filterSelected: any;

    ngOnDestroy(): void {
        // throw new Error('Method not implemented.');
    }

    ngOnInit(): void {
        this.matTableFilter.filterSelected$.subscribe((selected)=>{
            if(selected?.loader['filter-selected']?.loaded) {
                this.filterSelected = JSON.parse(JSON.stringify(selected.selected));
            }
        });

        // this.matTableFilter.filterSelected$.subscribe((x)=> {
        //     x.selected.
        // });
    }

    onPageChangeEvent(event): void {
        this.filterSelected.pagination.currentPage = event.pageIndex;
        this.filterSelected.pagination.nbItemsPerPage = event.pageSize;
        // this.filterSelected.pagination = this.pagination;
        this.changeFilterSelected.emit(this.filterSelected);
    }

  }
