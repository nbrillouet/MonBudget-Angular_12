import { Loader } from '../loader/loading-info.model';


export class FilterSelected<T> extends Loader {
    selected: T;

    constructor(tCreator: new () => T){
        super();
        this.selected = new tCreator();
    }
}

export class FilterSelection<T> extends Loader {
    selection: T;

    constructor(tCreator: new () => T){
        super();
        this.selection = new tCreator();
    }
}
