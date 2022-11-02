// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { FilterForDetail, Select } from '@corporate/model';
// import { AuthService } from 'app/core/auth/auth.service';
// import { EnumSelectType } from 'app/model/enum/enum-select-type.enum';
// import { FilterOperationDetail, FilterOperationTableSelected, FilterOperationTableSelection } from 'app/model/filters/operation.filter';
// import { Operation, OperationForDetail } from 'app/model/referential/operation.model';
// import { environment } from 'environments/environment';
// import { Observable } from 'rxjs';

// @Injectable()
// export class OperationService {
// baseUrl = environment.apiUrl;

// constructor(
//         private _httpClient: HttpClient,
//         private _authService: AuthService
//     ) {

//      }

//     getSelectList(idOperationMethod: number,idOperationType: number, enumSelectType: EnumSelectType): Observable<Select[]> {
//         return this._httpClient
//             .get<Select[]>(`${this.baseUrl}referential/operations/user-groups/${this._authService.user.idUserGroup}/operation-methods/${idOperationMethod}/operation-types/${idOperationType}/select-type/${enumSelectType}/operations`);
//     }

//     getSelectListByOperationMethods(operationMethods: Select[]): Observable<Select[]> {
//         return null;
//         // return this._httpClient
//         //     .post<Select[]>(`${this.baseUrl}referential/operations/user-groups/${this.userAuth.idUserGroup}/select-list`,operationMethods);
//     }

//     create(operation: Operation): Observable<Select> {
//         // operation.idUserGroup = this.userAuth.idUserGroup;
//         return this._httpClient
//             .post<Select>(`${this.baseUrl}referential/operations/create`,operation);
//     }


//     /*---------------------------------------------------------------*/

//     getOperationTable(filter: FilterOperationTableSelected): Observable<any> {
//          return this._httpClient
//             .post<any>(`${this.baseUrl}referential/operations/filter`,filter);
//     }

//     getOperationTableFilter(filter: FilterOperationTableSelected): Observable<FilterOperationTableSelection> {
//         return this._httpClient
//             .post<FilterOperationTableSelection>(`${this.baseUrl}referential/operations/table-filter`,filter);
//     }

//     getDetailFilter(filter: OperationForDetail): Observable<FilterOperationDetail> {
//         return this._httpClient
//             .post<FilterOperationDetail>(`${this.baseUrl}referential/operations/operation-detail-filter`,filter);
//     }

//     //TODO
//     getForDetail(filter: FilterForDetail): Observable<OperationForDetail> {
//         return null;
//         // return this._httpClient
//         //     .get<OperationForDetail>(`${this.baseUrl}referential/operations/${filter.id}/users/${this.userForGroup.id}/operation-detail`);
//     }

//     saveDetail(operationDetail: OperationForDetail): Observable<OperationForDetail> {
//         // operationDetail.user =  this.userForGroup;
//         return this._httpClient
//             .post<OperationForDetail>(`${this.baseUrl}referential/operations/save`,operationDetail);
//     }

//     // deleteOperationDetail(idOperation: number) {

//     //     return this._httpClient
//     //         .delete(`${this.baseUrl}referential/operations/${idOperation}/delete`)
//     //         .map((response: boolean) => {
//     //             return response;
//     //         });
//     // }

//     // TODO
//     deleteOperations(idOperationList: number[]): Observable<boolean> {
//         return null;
//         // return this._httpClient
//         //     .post<boolean>(`${this.baseUrl}referential/operations/user-groups/${this.userForGroup.idUserGroup}/delete-operations`,idOperationList);
//     }
// }
