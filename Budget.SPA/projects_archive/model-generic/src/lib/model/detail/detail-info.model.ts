import { Loader } from '../loader/loading-info.model';

export class Datas<T> extends Loader {
    datas: T;
    constructor() {
        super();
        this.datas = null;
    }
}

export class DatasFilter<T,U> extends Datas<T>  {
    filter: U;
    constructor() {
        super();
    }
}

export class DataInfo<T> extends Loader {
    datas: T;

    constructor(){
        super();
        this.datas = null;
    }
}

export class DetailInfo<T,U> extends DataInfo<T>  {
    filter: U;

    constructor() {
        super();
    }
}

export class ModelInfo<T> extends Loader {
    model: T;

    constructor(){
        super();
        this.model = null;
    }
}

export class DetailFormInfo<T,U> extends ModelInfo<T>  {
    filter: U;

    constructor() {
        super();
    }
}

