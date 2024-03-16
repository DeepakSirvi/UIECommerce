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
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



 
}
