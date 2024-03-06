import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Model/category';
import { User } from 'src/app/Model/user';
import { LoginService } from 'src/app/Service/AuthService/login.service';
import { CategoryService } from 'src/app/Service/category.service';
import { ProductsService } from 'src/app/Service/products.service';
import Swal from 'sweetalert2';
import { HomeComponent } from '../home/home.component';
import { CartService } from 'src/app/Service/cart.service';
import { UserDashBoardComponent } from '../user-dash-board/user-dash-board.component';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(private login: LoginService,private productService:ProductsService, private route: Router, private categoryService: CategoryService,
    private cartService:CartService,private activeRoute:ActivatedRoute,private userDashboard:UserDashBoardComponent, private post: PostService) { }
  isUserActive = false;
  user: any = null;
  allcategory: Category[] = [];
  baseRoute='';
  searchKey='';
  productToCart:number=0;
  productToWishList:number=0;


  firstThird: any[] = [];
  secondThird: any[] = [];
  finalThird:any[]=[];

  ngOnInit() {
    this.isUserActive = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isUserActive=this.login.isLoggedIn()
    });
    if(this.isUserActive)
    {
      this.cartService.navbarCount.subscribe((data)=>{
        if(data.count[0][1]!=null)
        this.productToCart=data.count[0][1];
        this.productToWishList=data.count[1][1];
      })
    } 
      // this.baseRoute='/customer';
    this.categoryService.getCategories().subscribe((result: any) => {
      this.allcategory = result.AllCategory;
      // Split the Allcategory array into three thirds
      const thirdOfLength = Math.ceil(this.allcategory.length / 3);
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
        this.post.showSuccess('Logout Succesfully','Success')
      }
    });
  }

  searchProduct(){
    this.route.navigate(['/customer/home/search/'+this.searchKey])
  }

  getCount(){
    this.cartService.getTotalCount().subscribe((data:any)=>{
      this.cartService.navbar.next(data);
    })
  }
}
