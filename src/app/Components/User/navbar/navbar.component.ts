import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Model/category';
import { User } from 'src/app/Model/user';
import { LoginService } from 'src/app/Service/AuthService/login.service';
import { CategoryService } from 'src/app/Service/category.service';
import { ProductsService } from 'src/app/Service/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(private login: LoginService,private productService:ProductsService, private route: Router, private categoryService: CategoryService) { }
  isUserActive = false;
  user: any = null;
  allcategory: Category[] = [];
  baseRoute='';

  firstThird: any[] = [];
  secondThird: any[] = [];
  finalThird:any[]=[];

  ngOnInit() {
    this.isUserActive = this.login.isLoggedIn();
    this.user = this.login.getUser();

    if(this.isUserActive)
    {
      this.baseRoute='/customer';
    }
    // this.login.loginStatusSubject.asObservable().subscribe(data => {
    //   this.isUserActive = this.login.isLoggedIn();
    //   this.user = this.login.getUser();
    // });
    this.categoryService.getCategories().subscribe((result: any) => {
      this.allcategory = result.AllCategory;
      const thirdOfLength = Math.ceil(this.allcategory.length / 3);

    // Split the Allcategory array into three thirds
    this.firstThird = this.allcategory.slice(0, thirdOfLength);
    this.secondThird = this.allcategory.slice(thirdOfLength, 2 * thirdOfLength);
    this.finalThird = this.allcategory.slice(2 * thirdOfLength);
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
        this.baseRoute='';
        this.route.navigate(['']);
        Swal.fire('Logged Out!', 'You have been logged out.', 'success');
      }
    });
  }

  getActiveProductByCat(id:any){
    this.route.navigate(['/customer/home/'+id])   
  }

}
