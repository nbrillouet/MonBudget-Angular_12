// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from 'environments/environment';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { FilterUserTableSelected } from 'app/model/filters/user.filter';
// import { UserForDetail } from 'app/model/user.model';
// import { IUserShortcut } from 'app/model/user-shortcut.model';


// @Injectable()
// export class UserService {
//     baseUrl = environment.apiUrl;
//     onUserChanged: BehaviorSubject<any> = new BehaviorSubject({});

//     constructor(
//         private _httpClient: HttpClient
//     ) { }


//     getUserTable(filter: FilterUserTableSelected): Observable<any> {
//         return this._httpClient
//             .post<any>(`${this.baseUrl}users/filter`,filter);
//     }

//     getUserTableFilter(filter: FilterUserTableSelected): Observable<FilterUserTableSelected> {
//         return this._httpClient
//             .post<FilterUserTableSelected>(`${this.baseUrl}users/table-filter`,filter);
//     }

//     getUserForDetail(id: number): Observable<UserForDetail> {
//         return this._httpClient
//             .get<UserForDetail>(`${this.baseUrl}users/${id}/user-detail`);
//     }

//     saveUser(user): any {
//         return new Promise((resolve, reject) => {
//             this._httpClient.post('users/save/' + user.id, user)
//                 .subscribe((response: any) => {
//                     resolve(response);
//                 }, reject);
//         });
//     }

//     updateUser(id: number, user: UserForDetail): any {
//         return this._httpClient
//             .put(`${this.baseUrl}users/${id}/update`,user);
//     }

//     deleteShortcut(idUser: number, id: number): any {
//         return this._httpClient
//             .delete(`${this.baseUrl}users/${idUser}/shortcuts/${id}`);
//     }

//     addShortcut(idUser: number, shortcut: IUserShortcut): any {
//         return this._httpClient
//             .post(`${this.baseUrl}users/${idUser}/shortcuts/`, shortcut);
//     }

// }
