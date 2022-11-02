/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { Select, SelectCode } from '@model-generic';
import { get } from 'lodash';
import { LambdaExpression } from '../lambda-function.static';
import { CorpDataFormOption } from './model/form-option.model';
// import { FormOption } from './model/form-option.model';

export class CorpForm<T,U> {
    public formGroup: FormGroup;
    public model: T;

    private builderOption: U;

    constructor(
        model: NoParamConstructor<T>,
        builderOption: NoParamConstructor<U>
        ){
        this.model = new model();
        this.builderOption = new builderOption();

        this.formGroup = new FormGroup({});
        this.formGroup = this.createFormGroup(this.model, this.formGroup, this.builderOption);

        this.model = this.instanciateProperty(new model(), null);
    }

    getProperty(property: string): string {
        if(typeof property === 'object') {
            property = (Object.values(property)[0] as string).split('.')[0];
            return property;
        }
        else {
            return property.split('.').pop();
        }
    }

    // public getControl(lambdaExpression: ((obj: T) => any) | (new(...params: any[]) => T) | string): AbstractControl;

    public getControl(expression: ((obj: T) => any) | (new(...params: any[]) => T) | string): AbstractControl {
        let control=null;
        if(typeof expression === 'string') {
            control = this.getControlByString(expression);
        }
        else {
            const controlName = LambdaExpression.getExpressionName(expression);
            control = this.getControlByString(controlName);
        }

        return control;
    }

    // public getValue(expression: ((obj: T) => any) | (new(...params: any[]) => T) | string): any;

    public getValue(expression: ((obj: T) => any) | (new(...params: any[]) => T) | string): any {
        if(typeof expression === 'object') {
            expression = (Object.values(expression)[0] as string).split('.')[0];
        }

        const control = this.getControl(expression);

        return control?.value;
    }

    public setValue(lambdaExpression: ((obj: T) => any) | (new(...params: any[]) => T), value: string | Date | boolean | number | Select | SelectCode | any): void {
        const control = this.getControl(lambdaExpression);

        control?.setValue(value, { emitEvent: false });
    }

    public getFunctionValue(lambdaExpression: ((obj: T) => any) | (new(...params: any[]) => T)): any {
        const indexes = this.findRegexIndices(lambdaExpression.toString(), 'x => x.');
        const properties = [];
        indexes.forEach((x)=>{
            const cut = lambdaExpression.toString().substring(x);
            let toto: string=null;
            for(let i = 0; i<cut.length; i++) {
                const char = cut.substr(i,1);
                if(char!=='(' && char!==')') {
                    // if(char!=')')
                        toto = `${toto ? toto : ''}${char}` ;
                }
                else { break; }

            }
            properties.push(toto);
        });

        //3 parametre max
        let param1: any;
        let param2: any;
        let param3: any;
        switch(properties.length) {
            case 1:
                return this.model[properties[0]]();
            case 2:
                param1 = this.getPrivateValue(properties[1]);
                return this.model[properties[0]](param1);
            case 3:
                param1 = this.getPrivateValue(properties[1]);
                param2 = this.getPrivateValue(properties[2]);
                return this.model[properties[0]](param1, param2);
            case 4:
                param1 = this.getPrivateValue(properties[1]);
                param2 = this.getPrivateValue(properties[2]);
                param3 = this.getPrivateValue(properties[3]);
                return this.model[properties[0]](param1, param2, param3);
        }
    }

    public enableControl(lambdaExpression: ((obj: T) => any) | (new(...params: any[]) => T)): void {
        const control = this.getControl(lambdaExpression);
        control?.enable({ onlySelf: true, emitEvent: false });
    }

    public disableControl(lambdaExpression: ((obj: T) => any) | (new(...params: any[]) => T)): void {
        const control = this.getControl(lambdaExpression);
        control?.disable({ onlySelf: true, emitEvent: false });
    }

    public disableForm(toDisabled: boolean): void {
        this.disableFormControls(toDisabled, this.formGroup, null);
    }

    public preselection(lambdaExpression: ((obj: T) => any) | (new(...params: any[]) => T), baseList: any[]): void {
        const control = this.getControl(lambdaExpression);

        //données par defaut (fixé à 1er enregistrement d'une liste si liste contient 1 enregistrement)
        if (!control?.value && baseList?.length === 1) {
            // this.formSetValue(controlName, baseList[0]);
            control.setValue(baseList[0]);
        }

        //presence d'une valeur pour le formName mais correspond pas a la 1ere=> on efface
        if (control.value) {
            if (baseList?.length > 0) {
                if (baseList[0] !== control.value) {
                    // this.formSetValue(controlName, null);
                    control.setValue(null);
                }
            }
            else { control.setValue(null); }
        }
    }

    private findRegexIndices(text, needle): any {
        const needleLen = needle.length;
        const reg = new RegExp(needle, 'gi');
        const indices = [];
        let result;

        while ( (result = reg.exec(text)) ) {
          indices.push([result.index + needleLen]);
        }
        return indices;
    }

    private getPrivateValue(property: string): any {
        const control = this.getControlByString(property);
        return control?.value;
    }

    private getControlByString(field: string): AbstractControl {
        let result: AbstractControl;
        field.split('.').forEach((x)=>{
            result = result == null ? this.formGroup.get(x) : result.get(x);
        });
        return result;
    }

    private createFormGroup(model, formGroup, option): FormGroup {
        Object.keys(model).forEach((x) => {
            if (model[x] != null && typeof model[x] != 'string') {
                const formGroupChild = this.createFormGroup(model[x], new FormGroup({}), option!=null ? option[x] : null);

                formGroup.addControl(x, formGroupChild);
            }
            else {
                const formOption: CorpDataFormOption = option ? option[x] : null;
                const formControl: FormControl = new FormControl(formOption?.defaultValue==null ? null : formOption.defaultValue, formOption?.validators?.length>0 ?  formOption.validators : null);
                formOption?.defaultDisabled ? formControl.disable({ onlySelf: true, emitEvent: false }) : null;

                formGroup.addControl(x, formControl);
            }
        });
        return formGroup;
    }


    private disableFormControls(toDisabled: boolean, group: FormGroup | FormArray, propertyName: string): void {

        Object.keys(group.controls).forEach((key: string) => {
            const abstractControl = group.controls[key];
            if (abstractControl instanceof FormGroup || abstractControl instanceof FormArray) {
                const propertyNameNew = Object.keys(abstractControl.parent.controls).find(key => abstractControl.parent.controls[key] === abstractControl);
                propertyName = propertyName ? `${propertyName}.${propertyNameNew}` : propertyNameNew;

                this.disableFormControls(toDisabled, abstractControl, propertyName);
                propertyName = null;
            }
            else {
                const childName = Object.keys(abstractControl.parent.controls).find(key => abstractControl.parent.controls[key] === abstractControl);
                const fullName = propertyName ? `${propertyName}.${childName}` : `${childName}`;

                if (toDisabled || this.checkDisabledByDefault(fullName)) {
                    abstractControl.disable({ onlySelf: true, emitEvent: false });
                }
                else {
                    abstractControl.enable({ onlySelf: true, emitEvent: false });
                }
            }
        });
    }

    private checkDisabledByDefault(propertyName: string): boolean {

        const formOption: CorpDataFormOption = get(this.builderOption, propertyName);
        if(formOption && formOption?.defaultDisabled){
            return true;
        }
        return false;
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
