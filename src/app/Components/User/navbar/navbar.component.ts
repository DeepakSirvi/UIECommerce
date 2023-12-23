import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Model/category';
import { LoginService } from 'src/app/Service/AuthService/login.service';
import { CategoryService } from 'src/app/Service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(private login: LoginService, private route: Router, private categoryService: CategoryService) { }
  isUserActive = false;
  user: any = null;
  Allcategory: Category[] = [];

  firstThird: any[] = [];
  secondThird: any[] = [];
  finalThird:any[]=[];

  ngOnInit() {
    this.isUserActive = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data => {
      this.isUserActive = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
    this.categoryService.getCategories().subscribe((result: any) => {
      this.Allcategory = result.AllCategory;
      const thirdOfLength = Math.ceil(this.Allcategory.length / 3);

    // Split the Allcategory array into three thirds
    this.firstThird = this.Allcategory.slice(0, thirdOfLength);
    this.secondThird = this.Allcategory.slice(thirdOfLength, 2 * thirdOfLength);
    this.finalThird = this.Allcategory.slice(2 * thirdOfLength);
    });

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

  getActiveProductByCat(id:any){

  }

}
