import { ComboMultiple, Select, SelectGroup } from '@corporate/model';

export class FilterComboMultiple {
    placeholder: string;
    combos: ComboMultiple<Select>;
}

export class FilterComboMultipleGroup {
    placeholder: string;
    combos: ComboMultiple<SelectGroup>;
}
