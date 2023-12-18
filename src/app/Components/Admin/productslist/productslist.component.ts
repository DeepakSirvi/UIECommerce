import { Component, OnInit } from '@angular/core';
import { ItemListPagination } from 'src/app/Model/item-list-pagination';
import { Product } from 'src/app/Model/product';
import { ProductRequest } from 'src/app/RequestPayload/product-request';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit{

  constructor(private productService:ProductsService){

  }
  ngOnInit(): void {
 
    this.getProducts();
 
    
  }

  productList:ItemListPagination[] = [];
  productSearch:ProductRequest=new ProductRequest();
  getProducts(){
     this.productService.getAllProduct(this.productSearch).subscribe((data:any)=>{
       this.productList=data;
       console.log(data);

    })
  }

}
