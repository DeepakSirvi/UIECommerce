import { Injectable } from '@angular/core';
import { User } from 'src/app/Model/user';
import baseUrl from '../../Util/helper';
import { HttpClient } from '@angular/common/http';
import { AppRoutes } from 'src/app/Util/appRoutes';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {


  constructor(private http: HttpClient) {

  }

  // add user
  public addUser(user: User) {
    return this.http.post(AppRoutes.CUSTOMER_SIGNUP, user);   
  }

  public getUser(){
    return this.http.get(AppRoutes.GET_USER);
  }

  public updateUser(user:User){
    return this.http.put(AppRoutes.UPDATE_USER,user);
  }
}

