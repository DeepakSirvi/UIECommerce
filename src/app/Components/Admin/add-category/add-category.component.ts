import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { Category } from 'src/app/Model/category';
import { SubCategory } from 'src/app/Model/sub-category';
import { CategoryRequest } from 'src/app/RequestPayload/category-request';
import { SubCategoryRequest } from 'src/app/RequestPayload/sub-category-request';
import { CategoryService } from 'src/app/Service/category.service';
import { PostService } from 'src/app/Service/post.service';
//import Toast from 'src/app/Util/helper';



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
  constructor(private catService: CategoryService, private route: Router,private post:PostService) { }


  onSubmit() {
    if (this.category.categoryName != null && this.category.categoryName != undefined && this.category.categoryName != '') {
   
        let index = this.checkDublicate(this.category.subCategory);
        if (index === -2) {
          this.catService.addCategory(this.category).subscribe((result: any) => {
            // Toast.fire({
            //   icon: 'success',
            //   title: result.message
            // })
            this.post.showSuccess(result.message,'Success')
            .then((e: any) => {
              this.route.navigate(['admin/categoryManage']);
            })
          }, (error) => {
            // Toast.fire({
            //   icon: 'error',
            //   title: error.error.message
            // })
            this.post.showerror(error.error.message,'Error')
          })
        }
        else if (index === -1) {
          this.msg = "Dublicate subcategory not allowed"
        }
        else if(index===-3)
        {
          this.msg = "Please add atleast one SubCAtegory"
        }
        else
          this.msg = "This field required";
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
    if(arr.length==0)
    {
      return -3;
    }
    let count = 0;
    if (arr[0].subCategory === null || arr[0].subCategory === undefined || arr[0].subCategory === '') {
      return 0;
    }
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1].subCategory === null || arr[i + 1].subCategory === undefined || arr[i + 1].subCategory === '') {
        return i;
      }
      if (arr[i].subCategory == arr[i + 1].subCategory) {
        count++;
      }
    }
    if (count != 0)
      return -1;
    else
      return -2;
  }
}
