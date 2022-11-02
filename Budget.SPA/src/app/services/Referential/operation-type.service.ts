// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { FilterForDetail, Select } from '@corporate/model';
// import { AuthService } from 'app/core/auth/auth.service';
// import { EnumSelectType } from 'app/model/enum/enum-select-type.enum';
// import { FilterOtDetail, FilterOtTableSelected, FilterOtTableSelection } from 'app/model/filters/operation-type.filter';
// import { OtForDetail } from 'app/model/referential/operation-type.model';
// import { environment } from 'environments/environment';
// import { Observable } from 'rxjs';


// @Injectable()
// export class OtService {

//     baseUrl = environment.apiUrl;

//     constructor(
//             private _httpClient: HttpClient,
//             private _authService: AuthService
//         ) {

//          }

//         getSelectList(idOperationTypeFamily: number, enumSelectType: EnumSelectType): Observable<Select[]> {
//             return this._httpClient
//             .get<Select[]>(`${this.baseUrl}referential/operation-types/operation-type-families/${idOperationTypeFamily}/select-type/${enumSelectType as number}/select-list`);
//         }


//         getOtTable(filter: FilterOtTableSelected): Observable<any> {
//           return this._httpClient
//             .post<any>(`${this.baseUrl}referential/operation-types/filter`,filter);
//         }

//         getForTableFilter(filter: FilterOtTableSelected): Observable<FilterOtTableSelection> {
//           return this._httpClient
//                 .post<FilterOtTableSelection>(`${this.baseUrl}referential/operation-types/table-filter`, filter);
//         }

//         getForDetail(filter: FilterForDetail): Observable<OtForDetail> {
//           return this._httpClient
//               .get<OtForDetail>(`${this.baseUrl}referential/operation-types/${filter.id}/users/${this._authService.user.idUserGroup}/detail`);
//         }

//         getForDetailFilter(filter: OtForDetail): Observable<FilterOtDetail> {
//             return this._httpClient
//                 .post<FilterOtDetail>(`${this.baseUrl}referential/operation-types/operation-type-detail-filter`,filter);
//         }

//         getSelectListByOperationTypeFamily(operationTypeFamilies: Select[]): Observable<Select[]> {
//             return this._httpClient
//                 .post<Select[]>(`${this.baseUrl}referential/operation-types/user-groups/${this._authService.user.idUserGroup}/select-list`,operationTypeFamilies);
//         }

//         saveOtDetail(otForDetail: OtForDetail): Observable<OtForDetail> {
//           otForDetail.user = this._authService.user;

//           return this._httpClient
//                 .post<OtForDetail>(`${this.baseUrl}referential/operation-types/save`,otForDetail);
//         }

//         deleteOtList(idOtList: number[]): Observable<boolean> {
//             return this._httpClient
//                 .post<boolean>(`${this.baseUrl}referential/operation-types/user-groups/${this._authService.user.idUserGroup}/delete-operation-type-list`,idOtList);
//         }

// }
