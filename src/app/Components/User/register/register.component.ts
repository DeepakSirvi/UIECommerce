import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserRegisterService } from 'src/app/Service/AuthService/user-register.service';
import { FormGroup, Validators , FormControl,} from '@angular/forms';
import Toast from 'src/app/Util/helper';
import { LoginService } from 'src/app/Service/AuthService/login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  constructor(private registerService:UserRegisterService,private route:Router,private loginService:LoginService){
  }
  userMobiles!:any;
  ngOnInit(): void {
    this.userMobiles=this.loginService.mobNew;
  }

  userForm = new FormGroup({
      firstName: new FormControl('',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/),
        Validators.minLength(3),
        Validators.maxLength(30)
      ]
      ),
      lastName:new FormControl('',
      [
        Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)
      ] 
      ),
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
        Validators.required,
      ),
      agreeTerms: new FormControl(false, 
      Validators.requiredTrue),
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
  get gender() {
    return this.userForm.get('gender');
  }

  get agreeTerms() {
    return this.userForm.get('agreeTerms');
  }

 
   public message:string='';


  userRegistration(user: FormGroup){ 
     this.registerService.addUser(user.value).subscribe((data:any)=>{
      Toast.fire({
        icon:'success',
        title:data.message
      }).then(e=>{
        this.route.navigate(['/customer/login']);
      })     
     },(error)=>{
        this.message=error.error.message;
     })

  }




}
