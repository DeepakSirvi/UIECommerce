import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/Service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  
  ngOnInit(): void {
    
  }
  constructor(private wishlistService:WishlistService){}

  // getWishList(){
  //   this.wishlistService.getWishlist().subscribe((data:any)=>{

  //   })
  // }

}
