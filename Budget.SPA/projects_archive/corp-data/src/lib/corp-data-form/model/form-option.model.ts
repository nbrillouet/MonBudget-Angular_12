import { ValidatorFn } from '@angular/forms';

export class CorpDataFormOption {
    validators: ValidatorFn[] = null;
    defaultDisabled: boolean = false;
    defaultValue: any = null;
}
