import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/AuthService/login.service';
import { FormGroup, Validator , FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import Toast from 'src/app/Util/helper';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private login: LoginService, private route: Router) { }

  loginForm = new FormGroup({
    userMobile: new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)
    ] 
    )
  })

  get userMobile() {
    return this.loginForm.get('userMobile');
  }

  userLogin(mobile:FormGroup){
    this.otp.userMobile=mobile.value.userMobile;
    this.login.mobNew.next(mobile.value.userMobile);   
    this.login.generateOtp(this.otp).subscribe((data: any) => {

      Toast.fire({
        icon: 'success',
        title: 'Otp Generated <span style="color: red;">' + data.otp + '</span>',
      }).then(e=>{
        this.route.navigate(['loginotp']);
      })    
    }, (error) => {
      Toast.fire({
        icon: 'error',
        title: error.error.message
      })
      this.route.navigate(['/register'])
    });
  }

  public otp: any = {
    "userMobile": ""
  }
  public message='';
}
