import { Injectable } from '@angular/core';
import { User } from 'src/app/Model/user';
import baseUrl from '../helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {


  constructor(private http: HttpClient) {

  }

  // add user
  public addUser(user: User) {
    console.log("calling add user from backend")
    return this.http.post(`${baseUrl}/auth/signup`, user);   // It return the observable object so we have to use subscribe
  }
}

