import { Injectable } from '@angular/core';
import { DataInfo, DetailFormInfo, FilterForDetail, Select as SelectModel, SelectCode } from '@corporate/model';
import { Select, Store } from '@ngxs/store';
import { AsifForDetail } from 'app/model/account-statement-import/account-statement-import-file.model';
import { FilterAsifDetail } from 'app/model/filters/account-statement-import-file.filter';
import { OperationDetail } from 'app/model/referential/operation-detail.model';
import { OperationTransverse } from 'app/model/referential/operation-transverse.model';
import { O } from 'app/model/referential/operation.model';
import { AsifDetailFilterAddOperation, AsifDetailFilterAddOperationTransverse, AsifDetailFilterChangeOperation, AsifDetailFilterChangeOt, AsifDetailFilterChangeOtf } from 'app/state/account-statement-import-file/asif-detail/asif-detail-filter/asif-detail-filter.action';
import { AsifDetailFilterState } from 'app/state/account-statement-import-file/asif-detail/asif-detail-filter/asif-detail-filter.state';
import { AsifDetailChangeOperationDetail, AsifDetailChangeOperationDetailOperationPlace, AsifDetailChangeOtf, LoadAsifDetail, SaveAsifDetail } from 'app/state/account-statement-import-file/asif-detail/asif-detail.action';
import { AsifDetailState } from 'app/state/account-statement-import-file/asif-detail/asif-detail.state';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AsifForDetailFormBuilderOptions } from './asif-detail.form-builder-option';
import { ChangeOperationListParameter } from './form-parameter/asif.parameter';
import { CorpDataForm, LambdaExpression } from '@corporate/data';

@Injectable({ providedIn: 'root' })
export class AsifDetailService extends CorpDataForm<AsifForDetail,AsifForDetailFormBuilderOptions>
{
    @Select(AsifDetailState.get) stateDetail$: Observable<DetailFormInfo<AsifForDetail, FilterForDetail>>;
    @Select(AsifDetailFilterState.get) stateFilter$: Observable<DataInfo<FilterAsifDetail>>;

    currentId: number = null;
    isNewOperationTemplate: boolean = false;
    isNewOperationTransverseTemplate: boolean = false;
    asifSaveInProgress: boolean = false;
    formIsLoaded: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _store: Store
    )
    {
        super(AsifForDetail, AsifForDetailFormBuilderOptions);

        this.stateDetail$
            // .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((x)=>{

                if(x.loader['datas']?.loaded) {
                    this.formIsLoaded = true;
                    if(x.model.hasOwnProperty('id')) {
                        if (this.currentId !== x.model.id) {
                            this.currentId = x.model.id;
                            this.initTrigger();
                        }
                    }
                }

                if(x.loader['operation-change']?.loaded) {
                    this.isNewOperationTemplate = false;
                }
                if(x.loader['operation-transverse-change']?.loaded) {
                    this.isNewOperationTransverseTemplate = false;
                }
                if(x.loader['datas-save']?.loading) {
                    this.asifSaveInProgress=true;
                    this.form.disableForm(true);
                }
                if(x.loader['datas-save']?.loaded) {
                    this.asifSaveInProgress = false;
                    this.form.disableForm(false);
                }
        });

        this.stateFilter$
            // .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((x)=>{

        });
    }

    destroyForm(): void {
        this.formIsLoaded = false;
        this.initForm(AsifForDetail, AsifForDetailFormBuilderOptions);
        // this.form = new CorpForm<AsifForDetail,AsifForDetailFormBuilderOptions>(AsifForDetail, AsifForDetailFormBuilderOptions);
    }

    saveAsifDetail(): void {
        this._store.dispatch(new SaveAsifDetail({ asDetail: this.form.formGroup.getRawValue() }));
    }

    loadAsifDetail(filterForDetail: FilterForDetail): void {
        this._store.dispatch(new LoadAsifDetail(filterForDetail));
    }

    changeAsifOperationDetail(operationDetail: OperationDetail): void {
        this._store.dispatch(new AsifDetailChangeOperationDetail(operationDetail));
    }

    addOperation(operationLabel: string): void {
        const operation = {
            id: 0,
            idOperationMethod: this.form.getValue(x=>x.operationMethod)?.id,
            idOperationType: this.form.getValue(x=>x.operationType)?.id,
            label: operationLabel,
            reference: null,
            idUserGroup: this.form.getValue(x=>x.asi)?.user?.idUserGroup
        } as O;

        this._store.dispatch(new AsifDetailFilterAddOperation({operation: operation} ));
    }

    addOperationTransverse(operationTransverseLabel: string): void {
        const operationTransverse = {
            id: 0,
            label: operationTransverseLabel,
            idUser: this.form.getValue(x=>x.asi.user).id
        } as OperationTransverse;

        this._store.dispatch(new AsifDetailFilterAddOperationTransverse({operationTransverse: operationTransverse} ));
    }

    private initTrigger(): void {
        this.initFormTriggerOperationMethod();
        this.initFormTriggerOperationTypeFamily();
        this.initFormTriggerOperationType();
        this.initFormTriggerOperation();
    }

    private initFormTriggerOperationMethod(): void {
        this.form.getControl(x=>x.operationMethod).valueChanges.subscribe((value) => {
            if(this.form.formGroup.dirty) {
                this.updateOperationMethod(value);
            }
        });
    }

    private initFormTriggerOperationTypeFamily(): void {
        this.form.getControl(x=>x.operationTypeFamily).valueChanges.subscribe((value) => {
            if(this.form.formGroup.dirty) {
                this.updateOperationTypeFamily(value);
            }
        });
    }

    private initFormTriggerOperationType(): void {
        this.form.getControl(x=>x.operationType).valueChanges.subscribe((value) => {
            if(this.form.formGroup.dirty) {
                this.updateOperationType(value);
            }
        });
    }

    private initFormTriggerOperation(): void {
        this.form.getControl(x=>x.operation).valueChanges.subscribe((value) => {
            if(this.form.formGroup.dirty) {
                this.updateOperation(value);
            }
        });
    }

    //===========================================================
    //===   OPERATION METHOD
    //===========================================================
    private updateOperationMethod(operationMethod: SelectModel): void {
        this.triggerOperationMethod(operationMethod);
    }

    private triggerOperationMethod(operationMethod: SelectModel): void {
        //modification methode operation implique:
        //-->change operationDetail.operationPlace
        //-->change liste operationTypeFamily
        //-->change liste operation
        this.changeOperationDetailOperationPlace(operationMethod);
        this.changeOperationTypeFamilyList(operationMethod);
        this.changeOperationList(x=>x.operationMethod, operationMethod);
    }

    //===========================================================
    //===   OPERATION TYPE FAMILY
    //===========================================================
    private updateOperationTypeFamily(operationTypeFamily: SelectCode): void {
        this.triggerOperationTypeFamily(operationTypeFamily);
    }

    private triggerOperationTypeFamily(operationTypeFamily: SelectCode): void {
        //modification du type operation famille implique:
        //-->change liste operationType
        this.changeOperationTypeList(operationTypeFamily);
    }

    // trigger: tr-operationMethod
    private changeOperationTypeFamilyList(operationMethod: SelectModel): void {
        this._store.dispatch(new AsifDetailFilterChangeOtf( { otf: this.form.getValue(x=>x.operationTypeFamily), operationMethod:  operationMethod } ));
    }

    private changeOperationTypeFamily(operationTypeFamily: SelectCode): void {
        this._store.dispatch(new AsifDetailChangeOtf( { otf: operationTypeFamily } ));
    }

    //===========================================================
    //===   OPERATION TYPE
    //===========================================================
    private updateOperationType(operationType: SelectModel): void {
        this.triggerOperationType(operationType);
    }

    private triggerOperationType(operationType: SelectModel): void {
        //modification du type operation implique:
        //-->change liste operation
        this.changeOperationList(x=>x.operationType, operationType);
    }

    // trigger: tr-operationTypeFamily
    private changeOperationTypeList(operationTypeFamily: SelectCode): void {
        this._store.dispatch(new AsifDetailFilterChangeOt({ ot: this.form.getValue(x=>x.operationType), otf: operationTypeFamily }));
    }

    //===========================================================
    //===   OPERATION
    //===========================================================
    private updateOperation(operation: SelectModel): void {
        this.triggerOperation(operation);
    }

    private triggerOperation(operation: SelectModel): void {
        //modification operation implique:
        //-->change operationDetail / operation
        // this.asifForm.setValue(x=>x.operationDetail.operation, operation);

    }

    // trigger: tr-operationType tr-operationMethod
    private changeOperationList(nameFunction: ((obj: ChangeOperationListParameter) => any) | (new(...params: any[]) => ChangeOperationListParameter), value: string | Date | boolean | number | SelectCode | SelectModel): void {
        const param = LambdaExpression.getParameters<ChangeOperationListParameter>(nameFunction.toString(), new ChangeOperationListParameter(this.form.formGroup), value);
        this._store.dispatch(new AsifDetailFilterChangeOperation(param));
    }

    // private changeOperationList(operationType: SelectModel): void {
    //     this._store.dispatch(new AsifDetailFilterChangeOperation({operation: this.asifForm.getValue(x=>x.operation), operationMethod: this.asifForm.getValue(x=>x.operationMethod), ot: operationType }));
    // }

    //===========================================================
    //===   OPERATION DETAIL
    //===========================================================
    //===   OPERATION PLACE
    // trigger: tr-operationMethod
    private changeOperationDetailOperationPlace(operationMethod: SelectModel): void {
        this._store.dispatch(new AsifDetailChangeOperationDetailOperationPlace({operationPlace: this.form.getValue(x=>x.operationDetail.operationPlace) ,operationMethod: operationMethod }));
    }
}
