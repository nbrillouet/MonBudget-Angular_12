// @Injectable()
// export class BankFamilyService {
// baseUrl = environment.apiUrl;

//     constructor(
//         private http: HttpClient
//     ) { }

//     GetSelectList(idBankFamily:number, idSelectType: number) {
//         return this.http
//         .get(this.baseUrl + `referential/bank-families/bank-sub-families/${idBankFamily}/select-type/${idSelectType}/select-list`)
//         .map(response => <ISelect[]>response);

//     }

// }