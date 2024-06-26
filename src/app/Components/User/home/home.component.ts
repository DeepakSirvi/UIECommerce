import { Component, Injectable, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { PostService } from 'src/app/Service/post.service';
import { ProductsService } from 'src/app/Service/products.service';
import { WishlistService } from 'src/app/Service/wishlist.service';
import { AppRoutes } from 'src/app/Util/appRoutes';
//import Toast from 'src/app/Util/helper';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  newProductLimit=5;
  constructor(private productService: ProductsService,private post:PostService, private activeRoute: ActivatedRoute,private wishlistService:WishlistService) { }
  imageUrl = AppRoutes.imageUrl;
  productSearch: string = '';
  sortDir: string = "ASC";
  categoryId!: string;
  length!: number;
  pageSize = 20;
  pageIndex = 0;
  pageSizeOptions = [16, 24, 40];

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
    this.activeRoute.params.subscribe((data: any) => {

      if (data.key === 'subCat') {
        this.categoryId = data.id;
        this.getProductBySubCat();
      }
      else if (data.key === 'cat') {
        this.categoryId = data.id;
        this.getProductCategory();
      }
      else if (data.key === 'search') {
        this.productSearch = data.id;
        this.getAllProduct();
      }
      else {
        this.getAllProduct();
      }
    })
  }

  getAllProduct() {
    this.productService.getAllProductsActive(this.productSearch, this.pageIndex, this.pageSize, this.sortDir).subscribe((result: any) => {
      this.products = result.AllProduct.content;
      console.log(this.products)
      this.length = result.AllProduct.totalElements;
    })
  }
  getProductCategory() {
    this.productService.getProductByCatId(this.categoryId, this.pageIndex, this.pageSize, this.sortDir).subscribe((result: any) => {
      this.products = result.AllProduct.content;
      this.length = result.AllProduct.totalElements;
    }, (error) => {
      // Toast.fire({
      //   icon: 'error',
      //   title: error.error.message
      // })
      this.post.showerror(error.error.message,'Error')
      this.getAllProduct();
    })
  }
  getProductBySubCat() {
    this.productService.getProductBySubCatId(this.categoryId, this.pageIndex, this.pageSize, this.sortDir).subscribe((result: any) => {
      this.products = result.AllProduct.content;
      this.length = result.AllProduct.totalElements;
    }, (error) => {
      // Toast.fire({
      //   icon: 'error',
      //   title: error.error.message
      // })
      this.post.showerror(error.error.message,'Error')
      this.getAllProduct();
    })
  }

  addToWishList(id:any){
    this.wishlistService.addToWishList(id).subscribe((data)=>{

    },(error)=>{

    })
  }
}
