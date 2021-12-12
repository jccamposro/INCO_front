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

    public sendLogin(name_user: string, password: string): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(environment.urlBackend + 'loginUser', { name_user, password })
    }

    public sendMail(email: string): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(environment.urlBackend + 'send', { email })
    }
}
