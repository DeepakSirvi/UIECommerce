
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/Model/cart';
import { CartService } from 'src/app/Service/cart.service';
import { AppRoutes } from 'src/app/Util/appRoutes';
import Toast from 'src/app/Util/helper';
import { DashbordComponent } from '../../Admin/dashbord/dashbord.component';
import Swal from 'sweetalert2';
import { SaveforlaterService } from 'src/app/Service/saveforlater.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  constructor(private cartService: CartService, private activeRoute: ActivatedRoute,private route:Router
   ,private location:Location,private saveForLaterService:SaveforlaterService) {
  }
  imageUrl = AppRoutes.imageUrl;
  productId!: number;
  quantity!: number;
  cart: Cart[] = [];
  totalCount=0;
  ngOnInit(): void {
    // alert(this.location.path())  // To read url of current location
     this.activeRoute.params.subscribe((data: any) => {
      if (data.id === undefined || data.quantity === undefined) {
        this.getCart();
      }
      else {
        this.productId = data.id;
        this.quantity = data.quantity;
        this.updateToCart(this.productId, this.quantity)
      }
    })
  }

  getTotalCount(){
    this.totalCount=0;
    this.cart.forEach(element => {
      this.totalCount+=element.quantity;
    });
  }

  getCart() {
    this.cartService.getCart().subscribe((data: any) => {
      this.cart = data.cart;
      this.getTotalCount();
    });
  }
  updateToCart(id: any, quantity: any) {
    this.cartService.addToCart(id, quantity).subscribe((data: any) => {
      this.getCart();
    })
  }

  deleteCartItem(id: any) {

    Swal.fire({
      title: 'Remove',
      text: 'Are you sure you want to remove',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.deleteCartItem(id).subscribe((data: any) => {
          Toast.fire({
            icon: 'success',
            title: data.message,
          })
          this.getCart();
        }, (error) => {
          Toast.fire({
            icon: 'error',
            title: error.error.message
          })
        });
      }
    });   
  }

  saveForLater(id:any,cartId:any){
    this.saveForLaterService.addToSaveForLater(id).subscribe((data:any)=>{
      Toast.fire({
        icon: 'success',
        title: data.response
      })
      this.cartService.deleteCartItem(cartId).subscribe((data:any)=>{
        this.getCart();
      })
    },(error)=>{
      Toast.fire({
        icon: 'error',
        title: error.error.message
      })
    });
  }
}
