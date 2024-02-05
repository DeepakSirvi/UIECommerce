import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/Model/cart';
import { CartService } from 'src/app/Service/cart.service';
import { SaveforlaterService } from 'src/app/Service/saveforlater.service';
import { AppRoutes } from 'src/app/Util/appRoutes';

@Component({
  selector: 'app-shop-checkout',
  templateUrl: './shop-checkout.component.html',
  styleUrls: ['./shop-checkout.component.css']
})
export class ShopCheckoutComponent implements OnInit {

  constructor(private cartService: CartService, private activeRoute: ActivatedRoute, private route: Router
    , private location: Location, private saveForLaterService: SaveforlaterService) {
  }

  imageUrl = AppRoutes.imageUrl;
  productId!: number;
  quantity!: number;
  cart: Cart[] = [];
  totalCount = 0;

  ngOnInit(): void {

  }

  getCart() {
    this.cartService.getCart().subscribe((data: any) => {
      this.cart = data.cart;
      this.getTotalCount();
    });
  }

  getTotalCount() {
    this.totalCount = 0;
    this.cart.forEach(element => {
      this.totalCount += element.quantity;
    });
  }

}
