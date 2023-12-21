import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
    this.getAllProducts();
  }

  productList:Product[] = [];
  productSearch:string=' ';

  sortDir:string="ASC";

  length!:number;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [1, 2, 5,10];
  
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent!: PageEvent;
  
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getAllProducts();
  }


  getAllProducts(){
     this.productService.getAllProduct(this.productSearch,this.pageIndex,this.pageSize,this.sortDir).subscribe((data:any)=>{
       this.productList=data.AllProduct.content;
       this.length=data.AllProduct.totalElements;
       console.log(this.productList);

    })
  }

}
