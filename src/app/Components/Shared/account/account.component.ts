import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/Model/address';
import { User } from 'src/app/Model/user';
import { AddressService } from 'src/app/Service/AuthService/address.service';

import { LoginService } from 'src/app/Service/AuthService/login.service';
import { UserRegisterService } from 'src/app/Service/AuthService/user-register.service';
import Toast from 'src/app/Util/helper';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User = new User();
  addresslist:Address[]=[]
  ngOnInit(): void {
 
    this.getUserDetails();
    this.getAddress();
  }

  constructor(private userService: UserRegisterService, private login: LoginService, private route: Router, private address: AddressService) { }
  getUserDetails() {
    this.userService.getUser().subscribe((result: any) => {
      this.user = result;
    })
  }
  updateUser() {
    this.userService.updateUser(this.user).subscribe((result: any) => {
      Toast.fire({
        icon: 'success',
        title: result.message
      })
    }, (error) => {
      Toast.fire({
        icon: 'error',
        title: error.error.message
      })
    })
  }
  public logout() {
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
  getAddress() {
    
    this.address.findByUserId(this.login.getUserId()).subscribe({
      next: (data: any) => {
        console.log(data);
        this.addresslist=data;
      },
      error: (er: any) => {
      }
    })
  }

  

}
