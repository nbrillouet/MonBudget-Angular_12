import { Select, SelectGroup } from '../select/select.model';
import { ComboMultiple } from './combo.model';

export class FilterComboMultiple {
    placeholder: string;
    combos: ComboMultiple<Select>;
}

export class FilterComboMultipleGroup {
    placeholder: string;
    combos: ComboMultiple<SelectGroup>;
}
