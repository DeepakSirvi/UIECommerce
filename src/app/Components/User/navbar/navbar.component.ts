import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/AuthService/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  
  constructor(private login:LoginService,private route:Router){}
    isUserActive=false;
    user:any=null;

   ngOnInit(){
    this.isUserActive=this.login.isLoggedIn();
    this.user=this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isUserActive=this.login.isLoggedIn();
      this.user=this.login.getUser();
    });
   

   } 
  public logout(){
    this.login.logout();
    this.route.navigate(['']);
    }
  
}
