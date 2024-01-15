import { Component, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginService } from 'src/app/Service/AuthService/login.service';
import { CartService } from 'src/app/Service/cart.service';


@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {
  isUserActive = false;
  
  ngOnInit(): void {
   
  }
  constructor(private login: LoginService,private cartService:CartService){
    this.isUserActive = this.login.isLoggedIn();
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isUserActive=this.login.isLoggedIn();
    });
    if(this.isUserActive){
      this.cartService.getTotalCount().subscribe((data:any)=>{
        this.cartService.navbar.next(data);
      })
    }
  }

}
