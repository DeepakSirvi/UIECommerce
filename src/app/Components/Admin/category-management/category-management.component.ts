import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Category } from 'src/app/Model/category';
import { SubCategory } from 'src/app/Model/sub-category';
import { CategoryRequest } from 'src/app/RequestPayload/category-request';
import { SubCategoryRequest } from 'src/app/RequestPayload/sub-category-request';
import { CategoryService } from 'src/app/Service/category.service';
import Toast from 'src/app/Util/helper';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {

  category: CategoryRequest = new CategoryRequest();
  singleCategory:Category = new Category();

  ngOnInit(): void {
    this.getAllCategories();
  }

  constructor(private categoryService:CategoryService){}
  
  categories:Category[]=[];
  categorySearch:string='';
  sortDir:string="DESC";

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

  getCategoryById(id:string){
    this.categoryService.getCategoryByIds(id).subscribe((result:any)=>{
      this.singleCategory = result;
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
  addSubcategory() {
    const newSubCategory: SubCategory = new SubCategory();
    this.singleCategory.subCategory.push(newSubCategory);
  }
  
  // deleteSubcategory(index: string) {
  //   if (this.category.subCategory.length > 1) {
  //     this.category.subCategory.splice(index, 1);
  //   }
  // }
  
  trackByFn(index: any, item: any) {
    return index;
  }
  
  deleteSubCategory(id:any,index:number){
    alert(id)
    if(id=='')
      this.singleCategory.subCategory.splice(index,1);
    else{
    this.categoryService.deleteSubCategoryById(id).subscribe((data:any)=>{
      Toast.fire({
        icon: 'success',
        title: data.message,
      }).then(e=>{
        this.singleCategory.subCategory.splice(index, 1)
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

  updateCategoryByIds(){
    this.categoryService.updateCategoryById(this.singleCategory).subscribe((result:any)=>{

    })
  }

}
