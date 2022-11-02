import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterForDetail, Select } from '@corporate/model';
import { EnumSelectType } from 'app/model/enum/enum-select-type.enum';
import { FilterODetail, FilterOTableSelected, FilterOTableSelection } from 'app/model/filters/operation.filter';
import { O, OForDetail } from 'app/model/referential/operation.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class OApiService {
baseUrl = environment.apiUrl;

constructor(
        private _httpClient: HttpClient
    ) {

     }

    getSelectList(idOperationMethod: number, idOperationType: number, idUserGroup: number, enumSelectType: EnumSelectType): Observable<Select[]> {
        return this._httpClient
            .get<Select[]>(`${this.baseUrl}referential/operations/user-groups/${idUserGroup}/operation-methods/${idOperationMethod}/operation-types/${idOperationType}/select-type/${enumSelectType}/operations`);
    }

    getSelectListByOperationMethods(operationMethods: Select[]): Observable<Select[]> {
        return null;
        // return this._httpClient
        //     .post<Select[]>(`${this.baseUrl}referential/operations/user-groups/${this.userAuth.idUserGroup}/select-list`,operationMethods);
    }

    create(operation: O): Observable<Select> {
        // operation.idUserGroup = this.userAuth.idUserGroup;
        return this._httpClient
            .post<Select>(`${this.baseUrl}referential/operations/create`,operation);
    }


    /*---------------------------------------------------------------*/

    getOTable(filter: FilterOTableSelected): Observable<any> {
         return this._httpClient
            .post<any>(`${this.baseUrl}referential/operation/operation-table`,filter);
    }

    getOTableFilter(filter: FilterOTableSelected): Observable<FilterOTableSelection> {
        return this._httpClient
            .post<FilterOTableSelection>(`${this.baseUrl}referential/operation/operation-table-filter`,filter);
    }

    getDetailFilter(filter: OForDetail): Observable<FilterODetail> {
        return this._httpClient
            .post<FilterODetail>(`${this.baseUrl}referential/operation/operation-detail-filter`,filter);
    }

    //TODO
    getForDetail(filter: FilterForDetail): Observable<OForDetail> {
        return null;
        // return this._httpClient
        //     .get<OperationForDetail>(`${this.baseUrl}referential/operations/${filter.id}/users/${this.userForGroup.id}/operation-detail`);
    }

    saveDetail(operationDetail: OForDetail): Observable<OForDetail> {
        // operationDetail.user =  this.userForGroup;
        return this._httpClient
            .post<OForDetail>(`${this.baseUrl}referential/operations/save`,operationDetail);
    }

    // deleteOperationDetail(idOperation: number) {

    //     return this._httpClient
    //         .delete(`${this.baseUrl}referential/operations/${idOperation}/delete`)
    //         .map((response: boolean) => {
    //             return response;
    //         });
    // }

    // TODO
    deleteOperations(idOperationList: number[]): Observable<boolean> {
        return null;
        // return this._httpClient
        //     .post<boolean>(`${this.baseUrl}referential/operations/user-groups/${this.userForGroup.idUserGroup}/delete-operations`,idOperationList);
    }
}
