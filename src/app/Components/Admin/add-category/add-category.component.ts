import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { empty } from 'rxjs';
import { Category } from 'src/app/Model/category';
import { SubCategory } from 'src/app/Model/sub-category';
import { CategoryRequest } from 'src/app/RequestPayload/category-request';
import { CategoryService } from 'src/app/Service/category.service';



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
  constructor(private catService: CategoryService) { }


  onSubmit() {
    if (this.category.categoryName != null && this.category.categoryName != undefined && this.category.categoryName != '') {
      console.log(this.category.subCategory);
      if (this.checkDublicate(this.category.subCategory)) {
        this.catService.addCategory(this.category).subscribe((result) => {
          console.log(result);
        }, (error) => {
          this.msg = error.error.message;
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
  const newSubCategory: SubCategory = new SubCategory();

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
