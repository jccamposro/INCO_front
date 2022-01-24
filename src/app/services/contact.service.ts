import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MatchResponse } from '../entities/reponse.interface';
import { UserMatch } from '../entities/user.interface';
import { Coincidence } from '../entities/coincidence';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(private http: HttpClient) {
    }

    public getContactRealised(): Observable<Coincidence[]> {
        return this.http.get <{ match: Coincidence[] }>(environment.urlBackend + 'matches/realised')
            .pipe(map(data => data.match))
    }

    public getContactRequest(): Observable<Coincidence[]> {
        return this.http.get <{ match: Coincidence[] }>(environment.urlBackend + 'matches/request')
            .pipe(map(data => data.match))
    }

    public getContactWaiting(): Observable<Coincidence[]> {
        return this.http.get <{ match: Coincidence[] }>(environment.urlBackend + 'matches/waiting')
            .pipe(map(data => data.match))
    }

    public answerMatch(payload: any): Observable<MatchResponse> {
        return this.http.post<MatchResponse>(environment.urlBackend + 'answer/match', payload)
    }

    public createMatch(payload: any): Observable<UserMatch> {
        return this.http.post<UserMatch>(environment.urlBackend + 'create/match', payload)
    }
}
