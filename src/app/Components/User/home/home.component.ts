import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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


  productSearch:string='';

  sortDir:string="ASC";

  length!:number;
  pageSize = 20;
  pageIndex = 0;
  pageSizeOptions = [16,24,40];
  
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
    this.getAllProduct();
  }
  ngOnInit(): void {
  this.getAllProduct();
  }
 
  getAllProduct(){
    this.productGet.getAllProductsDetail(this.productSearch,this.pageIndex,this.pageSize,this.sortDir).subscribe((result:any)=>{
      this.products = result.AllProduct.content;
      this.length=result.AllProduct.totalElements;
    })
  }

}
