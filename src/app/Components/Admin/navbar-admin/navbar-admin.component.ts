import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { LoginService } from 'src/app/Service/AuthService/login.service';
import { UserRegisterService } from 'src/app/Service/AuthService/user-register.service';
import Swal from 'sweetalert2';
//import Toast from 'src/app/Util/helper';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
  user:User = new User();
  constructor(private userService:UserRegisterService,private login:LoginService,private route:Router,private post:PostService){}

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
      // Toast.fire({
      //   icon:'success',
      //   title:result.message
      // })
      this.post.showSuccess(result.message,'Success')
    },(error)=>{
      // Toast.fire({
      //   icon:'error',
      //   title:error.error.message
      // })
      this.post.showerror(error.error.message,'Error')
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
    })
  //  this.post.showerror('Are you sure Want to logout ?','Error')
    .then((result: any) => {
      if (result.isConfirmed) {
        // Perform logout action here
        this.login.logout();
        this.route.navigate(['']);
        // Swal.fire('Logged Out!', 'You have been logged out.', 'success');
        this.post.showSuccess( 'You have been logged out.', 'success')
      }
    });

    
  }

}
