import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { LoginService } from 'src/app/Service/AuthService/login.service';
import { UserRegisterService } from 'src/app/Service/AuthService/user-register.service';
import Toast from 'src/app/Util/helper';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-vendor',
  templateUrl: './navbar-vendor.component.html',
  styleUrls: ['./navbar-vendor.component.css']
})
export class NavbarVendorComponent {

  user:User = new User();
  constructor(private userService:UserRegisterService,private login:LoginService,private route:Router){}

  ngOnInit(): void {
    this.getUserDetails()
  }
  public getUserDetails(){
    this.userService.getUser().subscribe((result:any)=>{
      this.user = result;
    })
  }

  public updateUser(){
    this.userService.updateUser(this.user).subscribe((result:any)=>{
      Toast.fire({
        icon:'success',
        title:result.message
      })
    },(error)=>{
      Toast.fire({
        icon:'error',
        title:error.error.message
      })
    })
  }

  public logout(){
    Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform logout action here
        this.login.logout();
        this.route.navigate(['']);
        Swal.fire('Logged Out!', 'You have been logged out.', 'success');
      }
    });

    
  }

}
