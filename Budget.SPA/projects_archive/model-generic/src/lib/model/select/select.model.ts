export class Select {
    id: number;
    label: string;
}

export class SelectYear extends Select {
    year: number;
}

export class SelectCode extends Select {
    code: string;
}

export class SelectCodeUrl extends SelectCode {
    url: string;
}

export class SelectGroup extends Select {
    selects: Select[];
}

export class SelectNameValue<T> {
    id: number;
    name: string;
    value: T;
}

export class SelectNameValueGroup<T> {
    id: number;
    name: string;
    selects: SelectNameValue<T>[];
}

