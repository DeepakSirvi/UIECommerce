import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { Category } from 'src/app/Model/category';
import { SubCategory } from 'src/app/Model/sub-category';
import { CategoryRequest } from 'src/app/RequestPayload/category-request';
import { SubCategoryRequest } from 'src/app/RequestPayload/sub-category-request';
import { CategoryService } from 'src/app/Service/category.service';
import Toast from 'src/app/Util/helper';



@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
 
 
  ngOnInit(): void {
  }
  category: CategoryRequest = new CategoryRequest();

  msg: string = '';
  subMsg: string = '';
  constructor(private catService: CategoryService,private route:Router) { }

  
  onSubmit() {
    if (this.category.categoryName != null && this.category.categoryName != undefined && this.category.categoryName != '') {
      console.log(this.category);
      if (this.checkDublicate(this.category.subCategory)) {
        this.catService.addCategory(this.category).subscribe((result:any) => {
          Toast.fire({
            icon: 'success',
            title: result.message
          }).then(e=>{
            this.route.navigate(['admin/categoryManage']);
          })   
        }, (error) => {
          Toast.fire({
            icon: 'error',
            title: error.error.message
          })
        })
      }
      else
        this.msg= "Dublicate subcategory not allowed"
    }
    else {
      this.msg = "This field required";

    }
  }
addSubcategory() {
  const newSubCategory: SubCategoryRequest = new SubCategoryRequest();

  this.category.subCategory.push(newSubCategory);

}

deleteSubcategory(index: number) {
  if (this.category.subCategory.length > 1) {
    this.category.subCategory.splice(index, 1);
  }
}

trackByFn(index: any, item: any) {
  return index;
}

checkDublicate(arr: any[]) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].subCategory == arr[i + 1].subCategory) {
      count++;
    }
  }
  if (count != 0)
    return false;
  else
    return true;
}
}
