import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Model/category';
import { ItemListPagination } from 'src/app/Model/item-list-pagination';
import { Product } from 'src/app/Model/product';
import { AdminProductFilter } from 'src/app/RequestPayload/admin-product-filter';
import { ProductRequest } from 'src/app/RequestPayload/product-request';
import { StatusBooleanRequest } from 'src/app/RequestPayload/status-boolean-request';
import { CategoryService } from 'src/app/Service/category.service';
import { PostService } from 'src/app/Service/post.service';
import { ProductsService } from 'src/app/Service/products.service';
import { AppRoutes } from 'src/app/Util/appRoutes';
//import Toast from 'src/app/Util/helper';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  constructor(private productService: ProductsService,private categoryService:CategoryService , private router: Router, private post: PostService,   private route:ActivatedRoute) {
  }
  allcategory: Category[] = [];
  ngOnInit(): void {
    this.getAllProducts();
    this.categoryService.getCategories().subscribe((result: any) => {
      this.allcategory = result.AllCategory;
    })
  }
  
  imageUrl = AppRoutes.imageUrl
  productList: Product[] = [];
  productSearch: string = '';
  updateStatus: StatusBooleanRequest = new StatusBooleanRequest();

  sortDir: string = "ASC";

  length!: number;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [10,15,20];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent!: PageEvent;

  productFilter:AdminProductFilter = new AdminProductFilter();

  getCurrentDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getAllProducts();
  }


  getAllProducts() {
    this.productService.getAllProduct(this.productSearch, this.pageIndex, this.pageSize, this.sortDir).subscribe((data: any) => {
      this.productList = data.AllProduct.content;
      this.length = data.AllProduct.totalElements;
    })
  }

  updateListingStatus(event: any, id: any) {
    this.updateStatus.status = event.checked;
    this.updateStatus.id = id;
    this.productService.updateStatus(this.updateStatus).subscribe((data: any) => {
      // Toast.fire({
      //   icon: 'success',
      //   title: data.response
      // })
      this.post.showSuccess(data.response,'Success')
    
      .then((e: any) => {
        this.getAllProducts();
        // this.route.navigate(['/admin/productslist']);
      })
    }, (error) => {
        // Toast.fire({
        //   icon: 'error',
        //   title: error.error.message
        // })
        this.post.showerror(error.error.message,'Error')
        .then((e: any) => {
          this.getAllProducts();
          // this.route.navigate(['/admin/productslist']);
        })
      })
  }
  getProductListByFilter(){
    if(this.productFilter.catId ==='' && this.productFilter.dates ==='' && this.productFilter.listingStatus === '' && this.productFilter.status==='')
    {
      this.getAllProducts();
    }
    else{
    this.productService.getAllProductFilter(this.productFilter, this.pageIndex, this.pageSize, this.sortDir).subscribe((data: any) => {
      this.productList = data.AllProduct.content;
      this.length = data.AllProduct.totalElements;
    });
  }
  }

  updateVerifiedStatus(event:any,id:any){
    this.productService.updateVerifiedStatus((event.target as HTMLSelectElement).value,id).subscribe((data:any)=>{
      // Toast.fire({
      //   icon: 'success',
      //   title: data.response
      // })
      this.post.showSuccess(data.response,'Success')
      .then((e: any) => {
        this.getAllProducts();
        // this.route.navigate(['/admin/productslist']);
      })
    },(error)=>{
      // Toast.fire({
      //   icon: 'error',
      //   title: error.error.message
      // })
      this.post.showerror(error.error.message,'Error')
      .then((e: any) => {
        this.getAllProducts();
        // this.route.navigate(['/admin/productslist']);
      })
    })

  }
}   
