// /* eslint-disable @typescript-eslint/naming-convention */

import { Datas, FilterSelected, FilterSelection } from '@corporate/model';
import { Observable } from 'rxjs';
import { EnumFilterType, EnumStyleType } from './mat-table-filter.enum';

export class MatTableFilter {
    columns: Column[];
    filterSelection$: Observable<FilterSelection<any>>;
    filterSelected$: Observable<FilterSelected<any>>;
    table$: Observable<Datas<any>>;
    toolbar?: Toolbar;
}

export class Column {
    field: string = null;
    label: string = null;
    isSortable: boolean = false;
    width: ColumnWidth = new ColumnWidth();
    pipe: boolean = false;
    filter: ColumnFilter = new ColumnFilter();
    style: ColumnStyle = new ColumnStyle();

    constructor() {
        // this.filter = {type:EnumFilterType.none, datas: null } as ColumnFilter;

    }
}

export class ColumnFilter {
    type: EnumFilterType = EnumFilterType.none;
    datas?: any = null; // FilterComboMultiple | FilterComboMultipleGroup | FilterDateRange | FilterNumberRange = null;
}

export class ColumnStyle {
    type: EnumStyleType;
    datas: any; //TypeNumberUpDown | TypeButtonIcon;
}

// export class TypeNumberUpDown {
//     isoNumber: number;
// }

export class TypeButtonIcon {
    icon: string;
    tooltip: string;
}

export class ColumnWidth {
    isFixed: boolean;
    value: number;
}

export class Row {
    [key: string]: any; // Cell<any>;
}

export class Toolbar {
    buttonAdd?: ButtonOption;
    buttonDelete?: ButtonOption;
    buttonFullscreen?: ButtonOption;
}

export class ButtonOption {
    enabled: boolean = false;
    tooltip?: string;
}
