import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coincidence } from '../entities/coincidence';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { MatchResponse } from '../entities/reponse.interface';
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

  public getPhotoProfile(): Observable<Coincidence[]> {
    return this.http.get <{ match: Coincidence[] }>(environment.urlBackend + 'matches/waiting')
        .pipe(map(data => data.match))
  }

  public getPhotoInfluencer(): Observable<Coincidence[]> {
    return this.http.get <{ match: Coincidence[] }>(environment.urlBackend + 'matches/waiting')
        .pipe(map(data => data.match))
  }

  public uploadPhotoVenture(payload: any): Observable<MatchResponse> {
    return this.http.post<MatchResponse>(environment.urlBackend + 'photo/venture', payload)
  }

  public uploadPhotoCompany(payload: any): Observable<MatchResponse> {
    return this.http.post<MatchResponse>(environment.urlBackend + 'photo/company', payload)
  }

  public uploadPhotoProfile(payload: any): Observable<MatchResponse> {
    return this.http.post<MatchResponse>(environment.urlBackend + 'photo/profile', payload)
  }

  public uploadPhotoInfluencer(payload: any): Observable<UserMatch> {
    return this.http.post<UserMatch>(environment.urlBackend + 'photo/influencer', payload)
  }
}
