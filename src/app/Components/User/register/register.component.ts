import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserRegisterService } from 'src/app/Service/AuthService/user-register.service';
import Swal from 'sweetalert2';
import { FormGroup, Validators , FormControl} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  

  constructor(private registerService:UserRegisterService,private route:Router){
  }

  userForm = new FormGroup({
      firstName: new FormControl('',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z ]*$/),
        Validators.minLength(3),
        Validators.maxLength(30)
      ]
      ),
      lastName:new FormControl(),
      userEmail:new FormControl(
       '',[
        Validators.required,
        Validators.email
       ]
      ),
      userMobile:new FormControl(
        '',
        [
        Validators.required,
        Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)
        ]
      ),
      gender:new FormControl(
        '',
        Validators.required
      )
  })
  get firstName() {
    return this.userForm.get('firstName');
  }
  get lastName()  {
    return this.userForm.get('lastName');
  }
  get userEmail() {
    return this.userForm.get('userEmail');
  }

  get userMobile() {
    return this.userForm.get('userMobile');
  }
  get gender(){
    return this.userForm.get('gender');
  }
 
   public message:string='';

  userRegistration(data: FormGroup){
    //  console.log(data);
     this.registerService.addUser(data.value).subscribe((data)=>{
      this.route.navigate(['/user/login']);

     },(error)=>{
        this.message=error.error.message;
     })

  }




}
