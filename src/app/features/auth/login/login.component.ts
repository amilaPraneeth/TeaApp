import { Component } from '@angular/core';
import { LoginRequest } from '../model/login-request.model';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from '../model/login-response.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
model: LoginRequest;

tokenUrl = 'https://oklob2ctest.b2clogin.com/oklob2ctest.onmicrosoft.com/B2C_1_ResourceOwner/oauth2/v2.0/token';

myto?:string;

constructor(private authService: AuthService,private cookeServices: CookieService,
  private router: Router, private http : HttpClient )
{
  this.model = {
    username: '',
    password: '',
    Client_ID:'6bb54446-aa82-42b0-8bfb-a1a65f8e98e8',
    Client_secret:'_R1QfX02q_U-ua_0j4zi~xODvX_SrM0CXY',
    grant_type:'password',
    scope:'openid https://oklob2ctest.onmicrosoft.com/146ac18c-69ac-48bf-a9d6-cea3fc04c31d/Auction.Read'
  };
}


onFormSubmit(): void {
  console.log(this.model);

  this.authService.login(this.model)
    .subscribe({
      next: (response) => {
        console.log(response)
        // Set Auth Cookies

      //  this.myto = response.access_token
      //   console.log(this.myto);

     this.cookeServices.set('Authorization', `Bearer ${response.access_token}`,
          undefined, '/', undefined, true, 'Strict');

        this.router.navigateByUrl('/');
      }
    });


//}
// onFormSubmit(): void{
//   let body = new URLSearchParams();
//   body.set('Client_ID', '6bb54446-aa82-42b0-8bfb-a1a65f8e98e8'),
//   body.set('Client_secret' ,'_R1QfX02q_U-ua_0j4zi~xODvX_SrM0CXY'),
//   body.set('grant_type', 'password'),
//   body.set('username' ,'Venture_01@ventureworld.com'),
//   body.set('password', 'Yoyo0165a'),
//   body.set('scope' ,'openid https://oklob2ctest.onmicrosoft.com/146ac18c-69ac-48bf-a9d6-cea3fc04c31d/Auction.Read')

//   let options = {
//     Headers : new HttpHeaders().set( 'Content-Type','application/x-www-form-urlencoded')
//   };

  


//   this.http.post('https://oklob2ctest.b2clogin.com/oklob2ctest.onmicrosoft.com/B2C_1_ResourceOwner/oauth2/v2.0/token')
//   .subscribe((res)=>{
//     console.log(res)
//   },
//   err => console.log(err)
//   )
        
// }
}


formSubmit (): void
{
//    let body = new URLSearchParams();
//    body.set('Client_ID', '6bb54446-aa82-42b0-8bfb-a1a65f8e98e8'),
// body.set('Client_secret' ,'_R1QfX02q_U-ua_0j4zi~xODvX_SrM0CXY'),
//  body.set('grant_type', 'password'),
//  body.set('username' ,'Venture_01@ventureworld.com'),
// body.set('password', 'Yoyo0165a'),
//  body.set('scope' ,'openid https://oklob2ctest.onmicrosoft.com/146ac18c-69ac-48bf-a9d6-cea3fc04c31d/Auction.Read')

let body = new URLSearchParams();

 body.set('Client_ID', this.model.Client_ID),
 body.set('Client_secret' ,this.model.Client_secret),
  body.set('grant_type', this.model.grant_type),
  body.set('username' , this.model.username),
 body.set('password', this.model.password),
  body.set('scope' ,this.model.scope)

 let headers = new HttpHeaders({
  'Content-Type':'application/x-www-form-urlencoded'
 })
 let options  = {headers: headers}

 this.http.post<LoginResponse>(this.tokenUrl,
  body,
  options,
  ).subscribe((respose=>{
    console.log(respose)
    
    
   
  }));
  
}


}


