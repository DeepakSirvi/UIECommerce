import { Component } from '@angular/core';
import { UserRole } from 'src/app/Model/user-role';
import { LoginService } from 'src/app/Service/AuthService/login.service';

@Component({
  selector: 'app-switchpanel',
  templateUrl: './switchpanel.component.html',
  styleUrls: ['./switchpanel.component.css']
})
export class SwitchpanelComponent {

 constructor(private login:LoginService){

 }

 isAdmin:boolean=false;

userRole:UserRole[] | null =null;

  ngOnInit(){
    this.userRole=this.login.getUserRole();
    console.log(this.userRole);
  }

}
