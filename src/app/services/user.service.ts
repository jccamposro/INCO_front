import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../entities/user.interface';
import { GenericResponse } from '../entities/reponse.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    public get(): Observable<{ user: User }> {
        return this.http.get<{ user: User }>(environment.urlBackend + 'user')
    }

    public getInformation(): Observable<{ user: User }> {
        return this.http.get<{ user: User }>(environment.urlBackend + 'influencer/information')
    }

    public update(user: User): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(environment.urlBackend + 'influencer/update', user)
    }
}
