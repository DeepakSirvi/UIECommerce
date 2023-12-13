import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Model/user';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AppRoutes } from 'src/app/Util/appRoutes';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) { }

  public user:User=new User();

  mobNew:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  mobile:Observable<any> = this.mobNew.asObservable();


  public loginStatusSubject=new Subject<boolean>();  // Event handl6ing 

  public generateOtp(user:any){
  
   return this.http.post(AppRoutes.GET_OTP,user);
  }
 

  // generate token
  public generateToken(loginData: any) {
    console.log("Generate token")
    return this.http.post(AppRoutes.USER_LOGIN, loginData);
  }

  // LoginUser : set token in localStorage
  public loginUser(token: any) {
    console.log('Login user')
    localStorage.setItem('token', token);
    return true;
  }

 
  //  isLogin user is logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    return (tokenStr === undefined || tokenStr === '' || tokenStr === null) ? false : true;
  }

  // LogOut : remove token from storage
  public logout() {
    console.log("Log out user");
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }


  // get Token
  public getToken(){
    console.log("Get token from local storage")
  return  localStorage.getItem('token');
  }

  //  Set userDetail 
  public setUser(user:any){
    this.user.id=user.id;
    this.user.firstName=user.firstName;
    this.user.lastName=user.lastName;
    this.user.userMobile=user.userMobile;
    this.user.userEmail=user.userEmail;
    this.user.userRole=user.userRole;
    console.log("set user")
    localStorage.setItem('user',JSON.stringify(user));
  }

  //  Get userDetail
  public getUser()
  {
    console.log("Get user from local stroage")
    let userStr= localStorage.getItem('user');
    if(userStr!=null)
    {
      return JSON.parse(userStr);
    }
    else{
      console.log("Get user calling logout method")
      this.logout();
      return null;
    }
  }
  

  // get User Role
  public getUserRole()
  {
    console.log("Get user role for it")
    let user=this.getUser();
    return user.userRole;
  }
}
