import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VarientSubCategoryRequest } from 'src/app/RequestPayload/varient-attribute-request';
import { VarientRequest } from 'src/app/RequestPayload/varient-category-request';
import { VarientService } from 'src/app/Service/varient.service';
import Toast from 'src/app/Util/helper';

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
  constructor(private varientService: VarientService,private route:Router) { }

  
  onSubmit() {
    if (this.varientCategory.name != null && this.varientCategory.name != undefined && this.varientCategory.name != '') {
      // console.log(this.varientCategory.categoryAttributes);
      if (this.checkDublicate(this.varientCategory.categoryAttributes)) {
        this.varientService.addVarientCategory(this.varientCategory).subscribe((result:any) => {
          
          Toast.fire({
            icon: 'success',
            title: result.response.message,
          }).then(e=>{
            this.route.navigate(['/admin/varientmanage']);
          })  
        }, (error) => {
          Toast.fire({
            icon: 'error',
            title: error.error.message
          })
        })
      }
      else
        this.msg= "Dublicate attribute not allowed"
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
    
    if (arr[i].attributeName == arr[i + 1].attributeName) {
      console.log(arr[i])
      count++;
    }
  }
  if (count != 0)
    return false;
  else
    return true;
}
}
