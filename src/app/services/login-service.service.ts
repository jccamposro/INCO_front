import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(public http: HttpClient, private router: Router,) { }

  storeUser(data:any){
    
    return this.http.post(environment.urlBackend+'user/register', data);
  }
  
}
