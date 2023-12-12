import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/Model/sub-category';
import { CategoryRequest } from 'src/app/RequestPayload/category-request';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  ngOnInit(): void {
   
  }

  category:CategoryRequest=new CategoryRequest();


  onSubmit() {
    // Handle the form submission logic here
    console.log('Category Name:', this.category);
    console.log('Subcategories:', this.category.subCategory);

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
}
