import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/Model/user-role';
import { LoginService } from 'src/app/Service/AuthService/login.service';
// import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-login-otp-verification',
  templateUrl: './login-otp-verification.component.html',
  styleUrls: ['./login-otp-verification.component.css']
})
export class LoginOTPVerificationComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private route: Router
  ) { }


  ngOnInit(): void {
    // this.login.mobileNumber=this.otpComponent.otp.mobileNumber;
  }

  public login: any = {
    "otp": "",
    "mobileNumber": ""
  }

  



  public loginUser() {
    this.loginService.generateToken(this.login).subscribe((data: any) => {
      this.loginService.loginUser(data.token);
      this.loginService.setUser(data);
     
     
      let userRole: UserRole[] = this.loginService.getUserRole();
      console.log(userRole);
      if (userRole.length==1) {
        if (userRole[0].role.roleName === "CUSTOMER") {
          this.route.navigate(['user'])
          this.loginService.loginStatusSubject.next(true)
        }
        else if (userRole[0].role.roleName === "ADMIN") {

          // alert(this.loginService.isLoggedIn())
          console.log("admin detected")
          this.route.navigate(['admin'])
          console.log("calling logi status")
          this.loginService.loginStatusSubject.next(true)
        }
      }
      else{
        this.route.navigate(['/switchpanel'])
      }
    },
      (error) => {

      })
  }
}
