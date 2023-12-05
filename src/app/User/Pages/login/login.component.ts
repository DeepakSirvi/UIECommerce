import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/AuthService/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private login:LoginService,
    private route:Router) {

  }
   
  public otp:any={
     "userMobile":""
  }
  public getOtp(){
    
    this.login.generateOtp(this.otp).subscribe((data:any)=>{
        this.route.navigate(['user/loginotp']);
        alert(data.otp);
    },(error)=>{
      console.log(error);
        Swal.fire('Something went wrong', 'Internal server error', 'error')
    })

  }
}
