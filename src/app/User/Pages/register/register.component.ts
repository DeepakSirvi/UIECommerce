import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserRegisterService } from 'src/app/Service/AuthService/user-register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private registerService:UserRegisterService,private route:Router){

  }
 public user:User={
    id:0,
    firstName: '',
    lastName: '',
    userMobile: '',
    userEmail: '',
    gender: '',
    userRole:[]
  };

  public registerUser(){

    // addUser function from User Service
    this.registerService.addUser(this.user).subscribe((data: any) => {
      console.log(data);
      console.log("Add user of user service")
      Swal.fire('Success', 'User is registered with id ' + data.userId, 'success')
      this.route.navigate(['login'])

    }
      ,
      (error) => {
        console.log(error);
        Swal.fire('Something went wrong', 'Internal server error', 'error')
      }

    );
  }
}
