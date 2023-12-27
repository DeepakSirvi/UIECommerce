import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Category } from 'src/app/Model/category';
import { CategoryRequest } from 'src/app/RequestPayload/category-request';
import { CategoryService } from 'src/app/Service/category.service';
import Toast from 'src/app/Util/helper';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {
  ngOnInit(): void {
    this.getAllCategories();
  }

  constructor(private categoryService:CategoryService){}
  
  categories:Category[]=[];
  categorySearch:string='';
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
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getCategoriesList(this.categorySearch,this.pageIndex,this.pageSize,this.sortDir).subscribe((result:any)=>{
     this.categories = result.AllCategory.content;
     this.length=result.AllCategory.totalElements;
    })
  }

  deleteCategory(id:any){
    this.categoryService.deleteCategoryById(id).subscribe((data:any)=>{
      Toast.fire({
        icon: 'success',
        title: data.message,
      }).then(e=>{
        this.getAllCategories();
      })  

    },(error)=>{
      Toast.fire({
        icon: 'error',
        title: error.error.message
      })
    })
  }

  deleteSubCategory(id:any){
    this.categoryService.deleteSubCategoryById(id).subscribe((data:any)=>{
      Toast.fire({
        icon: 'success',
        title: data.message,
      }).then(e=>{
        this.getAllCategories();
      })  

    },(error)=>{
      Toast.fire({
        icon: 'error',
        title: error.error.message
      })
    })
  }


}
