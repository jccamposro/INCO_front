import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { GenericResponse } from "../entities/reponse.interface";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    public sendLogin(payload: any): Observable<{  token: string }> {
        return this.http.post<{  token: string }>(environment.urlBackend + 'user/login', payload)
    }

    public sendRegister(payload: any): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(environment.urlBackend + 'user/register', payload)
    }

    public sendMail(email: string): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(environment.urlBackend + 'user/forgot-password', { email })
    }
}
