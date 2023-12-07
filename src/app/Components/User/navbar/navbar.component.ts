import { Component } from '@angular/core';
import { LoginService } from 'src/app/Service/AuthService/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  
  constructor(public login:LoginService){}
    isUserActive=false;
    user:any=null;

   ngOnInit(){
    this.isUserActive=this.login.isLoggedIn();
    this.user=this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isUserActive=this.login.isLoggedIn();
      this.user=this.login.getUser();
      console.log(this.isUserActive);
      console.log(this.user);
    });
   

   } 
  public logout(){
    this.login.logout();
    window.location.reload();
  }
  
}
