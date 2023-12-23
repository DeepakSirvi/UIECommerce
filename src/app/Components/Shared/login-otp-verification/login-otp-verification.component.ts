import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/Model/user-role';
import { LoginService } from 'src/app/Service/AuthService/login.service';
import Toast from 'src/app/Util/helper';
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
    this.loginService.mobile.subscribe((data:any)=>{
      this.login.mobileNumber=data;
    })
  }

  public login: any = {
    "otp": "",
    "mobileNumber": ""
  }

  loginOtpForm = new FormGroup({
    otpfill:new FormControl('',Validators.required)
  })

  get otpfill() {
    return this.loginOtpForm.get('otpfill');
  }

  public loginUser() {
    this.login.otp=this.loginOtpForm.value.otpfill; 
    this.loginService.generateToken(this.login).subscribe((data: any) => {
      this.loginService.loginUser(data.token);
      this.loginService.setUser(data);
      
      let userRole: UserRole[] = this.loginService.getUserRole();
      console.log(userRole);
      if (userRole.length==1) {
        Toast.fire({
          icon:'success',
          title:'Login Successfully '
        })

        if (userRole[0].role.roleName === "CUSTOMER") {
          this.route.navigate(['customer'])
          this.loginService.loginStatusSubject.next(true)
        }
        else if (userRole[0].role.roleName === "ADMIN") {

          // alert(this.loginService.isLoggedIn())
          console.log("admin detected")
          this.route.navigate(['admin'])
          this.loginService.loginStatusSubject.next(true)
        }
      }
      else{
        Toast.fire({
          icon:'success',
          title:'Login Successfully '
        })
        this.route.navigate(['/switchpanel'])
      }
    },
      (error) => {
        
        Toast.fire({
          icon:'error',
          title:error.error.message
        }
        )
      })
  }
}
