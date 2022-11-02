export class Loader {
    loader: Dictionary<LoadingInfo> = {};
}

export interface Dictionary<T> {
    [Key: string]: T;
}


export interface ILoadingInfo {
    loading: boolean;
    loaded: boolean;
}

export class LoadingInfo implements ILoadingInfo {
    loading: boolean;
    loaded: boolean;

    constructor() {
        this.loading = false;
        this.loaded = false;
    }
}
