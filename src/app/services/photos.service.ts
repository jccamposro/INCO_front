import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coincidence } from '../entities/coincidence';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { GenericResponse, MatchResponse } from '../entities/reponse.interface';
import { UserMatch } from '../entities/user.interface';

@Injectable({
    providedIn: 'root'
})
export class PhotosService {

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

    public getPhotoProfile(): Observable<{ image: string }> {
        return this.http.get<{ image: string }>(environment.urlBackend + 'photo/profile');
    }

    public getPhotoInfluencer(): Observable<{ image: string }> {
        return this.http.get <{ image: string }>(environment.urlBackend + 'photo/influencer')
    }

    public getPhotoEntrepreneur(): Observable<{ image: string }> {
        return this.http.get <{ image: string }>(environment.urlBackend + 'photo/entrepreneur')
    }

    public uploadPhotoVenture(payload: any): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(environment.urlBackend + 'upload/photo/venture', payload)
    }

    public uploadPhotoCompany(payload: any): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(environment.urlBackend + 'upload/photo/company', payload)
    }

    public uploadPhotoProfile(payload: any): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(environment.urlBackend + 'upload/photo/profile', payload)
    }

    public uploadPhotoInfluencer(payload: any): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(environment.urlBackend + 'upload/photo/influencer', payload)
    }
}
