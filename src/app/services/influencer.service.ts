import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Influencer } from '../entities/influencer.interface';
import { GenericResponse } from '../entities/reponse.interface';

@Injectable({
    providedIn: 'root'
})
export class InfluencerService {

    constructor(private http: HttpClient) {
    }

    public get(): Observable<{ influencer: Influencer }> {
        return this.http.get<{ influencer: Influencer }>(environment.urlBackend + 'influencer')
    }

    public register(payload: any): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(environment.urlBackend + 'influencer/register', payload)
    }
}
