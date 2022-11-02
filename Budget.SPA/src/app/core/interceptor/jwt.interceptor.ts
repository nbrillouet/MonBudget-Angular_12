// /* eslint-disable @typescript-eslint/naming-convention */
// import { Injectable, OnInit } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {

//     constructor() {

//     }

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         //exclusion d adresse exterieur pour l'authorisation
//         const excludeHttp = 'maps.googleapis.com';
//         // add authorization header with jwt token if available
//         const user = JSON.parse(localStorage.getItem('user'));
//         if(user?.token && request.url.search(excludeHttp)===-1) {
//             request = request.clone({
//                 setHeaders: {
//                     Authorization: `Bearer ${user.token}`
//                 }
//             });
//         }

//         // if (this.currentUser && this.currentUser.token && request.url.search(excludeHttp)===-1) {
//         //     request = request.clone({
//         //         setHeaders: {
//         //             Authorization: `Bearer ${this.currentUser.token}`
//         //         }
//         //     });
//         // }
//         // let token = JSON.parse(localStorage.getItem('currentUser'));
//         // if (currentUser && currentUser.token && request.url.search(excludeHttp)===-1) {
//         //     request = request.clone({
//         //         setHeaders: {
//         //             Authorization: `Bearer ${currentUser.token}`
//         //         }
//         //     });
//         // }

//         return next.handle(request);
//     }

// }
