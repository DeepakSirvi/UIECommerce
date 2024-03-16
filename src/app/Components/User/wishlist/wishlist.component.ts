import { Component, OnInit } from '@angular/core';
import { Wishlist } from 'src/app/Model/wishlist';
import { PostService } from 'src/app/Service/post.service';
import { WishlistService } from 'src/app/Service/wishlist.service';
import { AppRoutes } from 'src/app/Util/appRoutes';
//import Toast from 'src/app/Util/helper';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  
  ngOnInit(): void {
    this.getWishList();
  }
  imageUrl = AppRoutes.imageUrl;
  constructor(private wishlistService:WishlistService,private post:PostService){}
  wishlist:Wishlist[]=[];

  getWishList(){
    this.wishlistService.getWishlist().subscribe((data:any)=>{
      this.wishlist=data.WishList;
    })
  }

  deleteFromWishList(id:any){
    Swal.fire({
      title: 'Remove',
      text: 'Are you sure you want to remove?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Remove!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.wishlistService.removeToWishList(id).subscribe((data:any)=>{
          // Toast.fire({
          //   icon: 'success',
          //   title: data.response
          // })
          this.post.showSuccess(data.response,'Success')
          this.getWishList();
        },(error)=>{
          // Toast.fire({
          //   icon: 'error',
          //   title: error.error.message
          // })
          this,this.post.showerror(error.error.message,'Error')
        })
      }
    });
  }

}
