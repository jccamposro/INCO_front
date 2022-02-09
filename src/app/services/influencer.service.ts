import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Influencer, InfluencerInformation } from '../entities/influencer.interface';
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

    public getInformation(): Observable<InfluencerInformation> {
        return this.http.get<InfluencerInformation>(environment.urlBackend + 'influencer/information')
    }

    public register(payload: any): Observable<GenericResponse> {
        return this.http.post<GenericResponse>(environment.urlBackend + 'influencer/register', payload)
    }
    onUpload(data:any):Observable<any>{
        const headers = new HttpHeaders();
        return this.http.post(environment.urlBackend+'influencerFile',data, {headers:headers});
    }

    public getInfluencers(): Observable<{ influencer: Influencer }> {
        return this.http.get<{ influencer: Influencer }>(environment.urlBackend + 'influencers')
    }
    public getInfluencersById(id:any){
        return this.http.get(environment.urlBackend+'influencer/'+id);
      }
      public getSocialNetworks(){
        return this.http.get(environment.urlBackend+'socialNetworks/');
      }
}
