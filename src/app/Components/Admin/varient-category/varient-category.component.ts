import { Component } from '@angular/core';
import { VarientSubCategoryRequest } from 'src/app/RequestPayload/varient-attribute-request';
import { VarientRequest } from 'src/app/RequestPayload/varient-request';
import { VarientService } from 'src/app/Service/varient.service';

@Component({
  selector: 'app-varient-category',
  templateUrl: './varient-category.component.html',
  styleUrls: ['./varient-category.component.css']
})
export class VarientCategoryComponent {
  ngOnInit(): void {
  }
  varientCategory: VarientRequest = new VarientRequest();

  msg: string = '';
  subMsg: string = '';
  constructor(private varientService: VarientService) { }

  
  onSubmit() {
    if (this.varientCategory.name != null && this.varientCategory.name != undefined && this.varientCategory.name != '') {
      console.log(this.varientCategory.categoryAttributes);
      if (this.checkDublicate(this.varientCategory.categoryAttributes)) {
        this.varientService.addVarientCategory(this.varientCategory).subscribe((result) => {
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
  addVarientAttribute() {
  const newVarientSubCategory: VarientSubCategoryRequest = new VarientSubCategoryRequest();
  this.varientCategory.categoryAttributes.push(newVarientSubCategory);

}

deleteVarientAttribute(index: number) {
  if (this.varientCategory.categoryAttributes.length > 1) {
    this.varientCategory.categoryAttributes.splice(index, 1);
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
