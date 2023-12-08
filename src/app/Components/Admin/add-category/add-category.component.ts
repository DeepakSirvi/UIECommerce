import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  ngOnInit(): void {
   
  }
  categoryName: string = '';
  subcategories: string[] = [''];

  onSubmit() {
    // Handle the form submission logic here
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
