import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemListPagination } from 'src/app/Model/item-list-pagination';
import { Product } from 'src/app/Model/product';
import { ProductRequest } from 'src/app/RequestPayload/product-request';
import { StatusBooleanRequest } from 'src/app/RequestPayload/status-boolean-request';
import { ProductsService } from 'src/app/Service/products.service';
import { AppRoutes } from 'src/app/Util/appRoutes';
import Toast from 'src/app/Util/helper';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router,private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getAllProducts();
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
      Toast.fire({
        icon: 'success',
        title: data.response
      }).then(e => {
        this.getAllProducts();
        // this.route.navigate(['/admin/productslist']);
      })
    }, (error) => {
        Toast.fire({
          icon: 'error',
          title: error.error.message
        }).then(e => {
          this.getAllProducts();
          // this.route.navigate(['/admin/productslist']);
        })
      })
  }

  // reloadComponent() {
  //   const currentRoute = this.route.snapshot.routeConfig.path;
  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //     this.router.navigate([currentRoute]);
  //   });
  // }
}   
