import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/AuthService/login.service';
import { FormGroup, Validator , FormControl} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private login: LoginService, private route: Router) { }

  public otp: any = {
    "userMobile": ""
  }
  public message='';

  public getOtp() {

    this.login.generateOtp(this.otp).subscribe((data: any) => {
      this.route.navigate(['user/loginotp']);
      alert(data.otp);
    }, (error) => {
      // this.snack.open(error.error.message, '',
      // {
      //   duration: 5000,
      //   horizontalPosition: 'right',
      //   verticalPosition: 'top'

      // });
      // return;
     this.message=error.error.message;
    });
  }
}
