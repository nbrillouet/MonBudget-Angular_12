// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { FilterAccountDetail, FilterAccountTableSelected, FilterAccountTableSelection } from 'app/model/filters/account.filter';
// import { FilterForDetail } from 'app/model/filters/shared/filterDetail.filter';
// import { AccountForDetail } from 'app/model/referential/account.model';
// import { UserForGroup, UserForAuth } from 'app/model/user.model';
// import { environment } from 'environments/environment';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AccountService {

//     baseUrl = environment.apiUrl;
//     userAuth: UserForAuth = JSON.parse(localStorage.getItem('userInfo'));
//     userForGroup: UserForGroup = {id:this.userAuth.id,idUserGroup:this.userAuth.idUserGroup};

//     constructor(
//         private _httpClient: HttpClient

//     ) {
//         // this.userAuth = JSON.parse(localStorage.getItem('user'));
//         // this.user$.subscribe(x => {
//         //     if(x.loader['datas']?.loaded)
//         //         this.userForGroup = <IUserForGroup> {id:x.datas.id,idUserGroup:x.datas.idUserGroup};
//         // });
//      }


//     getForDetail(filter: FilterForDetail): Observable<AccountForDetail> {
//         return this._httpClient
//             .get<AccountForDetail>(`${this.baseUrl}referential/accounts/${filter.id}/account-detail`);
//     }

//     getForDetailFilter(filter: AccountForDetail): Observable<FilterAccountDetail> {
//         return this._httpClient
//             .post<FilterAccountDetail>(`${this.baseUrl}referential/accounts/account-detail-filter`, filter);
//     }

//     getForTable (filter: FilterAccountTableSelected): Observable<any> {
//         return this._httpClient
//             .post<any>(`${this.baseUrl}referential/accounts/account-table`, filter);
//     }

//     getForTableFilter(filter: FilterAccountTableSelected): Observable<FilterAccountTableSelection>  {
//         // filter.user=this.userForGroup;
//         return this._httpClient
//             .post<FilterAccountTableSelection>(`${this.baseUrl}referential/accounts/account-table-filter`,filter);
//     }

//     save(accountDetail: AccountForDetail): Observable<any> {
//         accountDetail.user =  this.userForGroup;

//         return this._httpClient
//               .post(`${this.baseUrl}referential/accounts/account-save`,accountDetail);
//     }

//     askAccountOwner(accountDetail: AccountForDetail): Observable<boolean> {
//         accountDetail.user =  this.userForGroup;

//         return this._httpClient
//               .post<boolean>(`${this.baseUrl}referential/accounts/ask-account-owner`,accountDetail);
//     }


//     // update(account: IAccountForDetail) {
//     //     return this._httpClient
//     //     .post(`${this.baseUrl}/referential/accounts/${account.id}/update`,account)
//     //     .map(res=><IAccountForDetail>res);
//     // }

//     // create(idUser:number, account: IAccountForDetail) {
//     //     return this._httpClient
//     //     .post(`${this.baseUrl}/referential/accounts/${account.id}/users/${idUser}/create`,account)
//     //     .map(res=><IAccountForDetail>res);
//     // }

//     // saveDetail(account: IAccountForDetail) {
//     //     return this._httpClient
//     //     .post(`${this.baseUrl}/referential/accounts/${account.id}/users/${account.id}/create`,account)
//     //     .map(res=><IAccountForDetail>res);
//     // }

//     // delete(idUser:number, account: IAccountForDetail) {
//     //     return this._httpClient
//     //     .post(`${this.baseUrl}/referential/accounts/${account.id}/users/${idUser}/delete`,account)
//     //     .map(res=><IAccountForDetail>res);
//     // }

//     deleteList(idAccountTable: number[]): Observable<boolean> {
//         return this._httpClient
//             .post<boolean>(`${this.baseUrl}referential/accounts/delete-account-list`,idAccountTable);
//     }

// }
