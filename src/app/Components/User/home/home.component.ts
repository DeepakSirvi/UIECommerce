import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductsService } from 'src/app/Service/products.service';
import { AppRoutes } from 'src/app/Util/appRoutes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products:Product[]=[];
  constructor(private productGet:ProductsService){}
  imageUrl = AppRoutes.imageUrl
  ngOnInit(): void {
    this.productGet.getAllProductsDetail().subscribe((result:any)=>{
      this.products = result.AllProduct.content;
    })
  }


}
