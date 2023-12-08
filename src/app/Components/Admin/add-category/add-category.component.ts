import { Component, OnInit } from '@angular/core';
import { CategoryRequest } from 'src/app/RequestPayload/category-request';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  ngOnInit(): void {
   
  }

  // constructor(private cat:CategoryRequest){}

  categoryName: string = '';
  subcategories: string[] = [''];

  onSubmit() {
    // Handle the form submission logic here
    // this.cat.categoryName=this.categoryName;
    // this.cat.subCategory = this.subCategory
    console.log('Category Name:', this.categoryName);
    console.log('Subcategories:', this.subcategories);
  }

  addSubcategory() {
    this.subcategories.push('');
  }

  deleteSubcategory(index: number) {
    if (this.subcategories.length > 1) {
      this.subcategories.splice(index, 1);
    }
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
