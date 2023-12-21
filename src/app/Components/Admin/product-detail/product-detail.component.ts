import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { ProductsService } from 'src/app/Service/products.service';
import Toast from 'src/app/Util/helper';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 
  productId:number=0;
  product!:Product;

  constructor(private route:ActivatedRoute,private productService:ProductsService){
    this.productId= this.route.snapshot.params['id'];
  }
  ngOnInit(): void {
   this.productService.getProductById(this.productId).subscribe((data:any)=>{
    this.product=data.Product;

   },(error)=>{{

   }}) 


  }
}
