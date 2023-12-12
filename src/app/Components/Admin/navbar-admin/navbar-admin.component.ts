import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/AuthService/login.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent {

  constructor(private login:LoginService,private route:Router){
    
  }

  public logout(){
    this.login.logout();
    this.route.navigate(['']);
  }

}
