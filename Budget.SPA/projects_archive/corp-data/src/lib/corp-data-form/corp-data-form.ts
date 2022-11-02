import { CorpForm } from './corp.form';

export class CorpDataForm<T,U> {
    public form: CorpForm<T,U>;
    // private builderOption: U;
    // private model: T;

    constructor(model: NoParamConstructor<T>, builderOption: NoParamConstructor<U>){
        // this.model = new model();
        // this.builderOption = new builderOption();

        // // super(form, builderOption);
        this.form = new CorpForm<T,U>(model, builderOption);
    }

    // public initForm<T,U>(): void{
    //     // this.form = new CorpForm<T,U>(this.model, this.builderOption);
    // }

    public initForm(model: (new () => T), builderOption: (new () => U)): void {
        this.form = new CorpForm<T,U>(model, builderOption);
        // return new model();
    }
}

type NoParamConstructor<T> = new () => T;


