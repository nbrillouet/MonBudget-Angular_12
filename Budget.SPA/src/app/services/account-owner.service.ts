import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountForDetail, AccountOwner } from 'app/model/referential/account.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AccountOwnerService {
    baseUrl = environment.apiUrl;

    constructor(
        private _httpClient: HttpClient

    ) {  }


    askAccountOwner(accountDetail: AccountForDetail): Observable<boolean> {
        // accountDetail.user =  this.userForGroup;
        return this._httpClient
              .post<boolean>(`${this.baseUrl}account-owner/ask-account-owner`,accountDetail);
    }

    responseAccountOwner(encryptResponse: string): Observable<AccountOwner> {
        return this._httpClient
              .get<AccountOwner>(`${this.baseUrl}account-owner/response-of-account-owner/${encodeURIComponent(encryptResponse)}`);
    }

}
