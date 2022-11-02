import { AbstractControl, FormGroup } from '@angular/forms';

export class Controls {
    [key: string]: AbstractControl;
};

export class CorpFormParameter {

    public initValues(parameter: any, formGroupParent: FormGroup): void {
        return this.setValues(parameter, formGroupParent.controls);
    }

    private setValues(parameter: any, controls: Controls): void {
        Object.keys(parameter).forEach((key) => {
            if (parameter[key] != null && typeof parameter[key] != 'string') {
                const formGroupChild = controls[key] as FormGroup;
                this.setValues(parameter[key], formGroupChild.controls);
            }
            else {
                parameter[key] = controls[key]?.value;
            }
        });
        return parameter;
    }
}
