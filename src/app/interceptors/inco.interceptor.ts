import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class IncoInterceptor implements HttpInterceptor {

    constructor(
        private router: Router
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token: string = localStorage.getItem('token');

        let request = req;

        if (token) {
            request = req.clone({
                setHeaders: {
                    authorization: `Bearer ${ token }`
                }
            });
        }

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {

                if (error.status === 401) {
                    localStorage.removeItem('token')
                    this.router.navigateByUrl('/login');
                }

                return throwError(error);

            })
        );
    }

}