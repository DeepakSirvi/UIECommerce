import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/Model/cart';
import { CartService } from 'src/app/Service/cart.service';
import { AppRoutes } from 'src/app/Util/appRoutes';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {


  constructor(private cartService: CartService, private activeRoute: ActivatedRoute) {

  }
  imageUrl=AppRoutes.imageUrl;
  productId!: number;
  quantity!: number;
  cart: Cart[] = [];
  ngOnInit(): void {
    this.activeRoute.params.subscribe((data: any) => {
      if (data.id === undefined || data.quantity === undefined) {
        this.cartService.getCart().subscribe((data:any)=>{
          this.cart=data.cart;
        })
      }
      else {
        this.productId = data.id;
        this.quantity = data.quantity;
        this.cartService.addToCart(this.productId, this.quantity).subscribe((data: any) => {
          this.cart = data.cart;
        })
      }
    })
  }


  updateToCart(id:any,quantity:any){
    this.cartService.addToCart(id, quantity).subscribe((data: any) => {
      this.cart = data.cart;
    })
  }
}
