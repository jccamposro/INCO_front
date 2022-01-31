import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResponse } from '../entities/reponse.interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Company } from '../entities/company.interface';

@Injectable({
  providedIn: 'root'
})
export class VentureService {

  constructor(private http: HttpClient) {}

  public registerVenture(payload: any): Observable<GenericResponse> {
    return this.http.post<GenericResponse>(environment.urlBackend + 'venture/register', payload)
  }

  public editVenture(payload: any): Observable<GenericResponse> {
    return this.http.post<GenericResponse>(environment.urlBackend + 'edit/venture', payload)
  }

  public deleteVenture(payload: any): Observable<GenericResponse> {
    return this.http.post<GenericResponse>(environment.urlBackend + 'delete/venture', payload)
  }

  public getVenture(): Observable<{ company: Company }> {
    return this.http.get<{ company: Company }>(environment.urlBackend + 'venture')
  }

  public getCollaborations(): Observable<{ company: Company }> {
    return this.http.get<{ company: Company }>(environment.urlBackend + 'collaborations')
  }
}
