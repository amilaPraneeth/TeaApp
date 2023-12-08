import { Injectable } from '@angular/core';
import { LoginRequest } from '../model/login-request.model';
import { LoginResponse } from '../model/login-response.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private cookieService:CookieService) { }


  login(request: LoginRequest) : Observable<LoginResponse> 
  {

    const payload = new FormData();
    payload.set('Client_ID',request.Client_ID);
    payload.set('Client_secret',request.Client_secret);
    payload.set('grant_type',request.grant_type);
    payload.set('username',request.username);
    payload.set('password',request.password);
    payload.set('scope',request.scope);

    let headers = new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
     })
     let options  = {headers: headers}

      return this.http.post<LoginResponse>(`https://oklob2ctest.b2clogin.com/oklob2ctest.onmicrosoft.com/B2C_1_ResourceOwner/oauth2/v2.0/token`,payload);
  }
}
