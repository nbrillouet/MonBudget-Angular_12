import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectCode } from '@corporate/model';
import { EnumSelectType } from 'app/model/enum/enum-select-type.enum';
import { FilterOtfDetail, FilterOtfTableSelected, FilterOtfTableSelection } from 'app/model/filters/operation-type-family.filter';
import { OtfForDetail } from 'app/model/referential/operation-type-family.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class OtfApiService {
    baseUrl = environment.apiUrl;

        constructor(
            private _httpClient: HttpClient
        ) {

         }

        // getSelectGroupList(): Observable<SelectGroup[]> {
        //     return null;
        //     // return this._httpClient
        //     //     .get<SelectGroup[]>(this.baseUrl + `referential/operation-type-families/users/${this.userAuth.id}/select-group-list`);
        // }

        // getSelectList(idMovement: number, enumSelectType: EnumSelectType): Observable<Select[]> {
        //     return null;
        //     // return this._httpClient
        //     //     .get<Select[]>(this.baseUrl + `referential/operation-type-families/user-groups/${this.userAuth.idUserGroup}/movements/${idMovement}/select-type/${enumSelectType as number}/select-list`);
        // }

        getSelectCodeList(idOperationMethod: number, enumSelectType: EnumSelectType): Observable<SelectCode[]> {
            return this._httpClient
                .get<SelectCode[]>(this.baseUrl + `referential/operation-type-families/operation-method/${idOperationMethod}/select-type/${enumSelectType as number}/select-list`);
        }

        getOtfTable(filter: FilterOtfTableSelected): Observable<any> {
          return this._httpClient
            .post<any>(`${this.baseUrl}referential/operation-type-family/operation-type-family-table`, filter);
        }

        getOtfTableFilter(filter: FilterOtfTableSelected): Observable<FilterOtfTableSelection> {
          return this._httpClient
                .post<FilterOtfTableSelection>(`${this.baseUrl}referential/operation-type-family/operation-type-family-table-filter`, filter);
        }

        getForDetailFilter(filter: OtfForDetail): Observable<FilterOtfDetail> {
            return this._httpClient
                .post<FilterOtfDetail>(`${this.baseUrl}referential/operation-type-families/operation-type-family-detail-filter`,filter);
        }

        // getForDetail(filter: FilterForDetail): Observable<OtfForDetail> {
        //     return null;
        //     // return this._httpClient
        //     //     .get<OtfForDetail>(`${this.baseUrl}referential/operation-type-families/${filter.id}/users/${this.userForGroup.id}/operation-type-family-detail`);
        // }

        // getForDetail(idOperationTypeFamily: number) {
        //   return this._httpClient
        //       .get(`${this.baseUrl}referential/operation-type-families/${idOperationTypeFamily}/operation-type-family-detail`)
        //       .map(response => <OtfDetail>response)
        // }

        save(otfDetail: OtfForDetail): Observable<OtfForDetail> {
        //   otfDetail.user =  this.userForGroup;
          return this._httpClient
                .post<OtfForDetail>(`${this.baseUrl}referential/operation-type-families/operation-type-family-save`,otfDetail);
        }

        deleteOtfList(idOtfList: number[]): Observable<boolean> {
            return null;
            // return this._httpClient
            //     .post<boolean>(`${this.baseUrl}referential/operation-type-families/user-groups/${this.userForGroup.idUserGroup}/delete-operation-type-family-list`,idOtfList);
        }
}
