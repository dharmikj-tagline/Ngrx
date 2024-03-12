import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);

  constructor() { }

  login(loginData: { email: string, password: string }) {
    return this.http.post(`${environment.apiURL}users/Login`, loginData);
  }

  signUp(signUpData: { name: string, email: string, password: string, role: string }) {
    return this.http.post(`${environment.apiURL}users/SignUp`, signUpData);
  }
}
