import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entities/user.interface';
import { environment } from '../../environments/environment';
import { Company } from '../entities/company.interface';
import { GenericResponse } from '../entities/reponse.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {
  }

  public get(): Observable<{ company: Company }> {
    return this.http.get<{ company: Company }>(environment.urlBackend + 'company')
  }

  public register(payload: any): Observable<GenericResponse> {
    return this.http.post<GenericResponse>(environment.urlBackend + 'company/register', payload)
  }

  public update(company: Company): Observable<GenericResponse> {
    return this.http.post<GenericResponse>(environment.urlBackend + 'company/update', company)
  }
}
