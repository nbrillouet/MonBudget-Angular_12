export class CorpReadonly<T> {
    public model: T;

    constructor(
        model: NoParamConstructor<T>
        ){
        this.model = this.instanciateProperty(new model(), null);
    }

    private instanciateProperty(model, childName: string): any {
        Object.keys(model).forEach((x) => {
            if (model[x] != null && typeof model[x] === 'object') {
                const propertyName = childName == null ? x.toString() : `${childName}.${x.toString()}`;
                this.instanciateProperty(model[x], propertyName);
            }
            else {
                model[x] = childName===null ? x.toString() : `${childName}.${x.toString()}`;
            }
        });
        return model;
    }
}

type NoParamConstructor<T> = new () => T;
