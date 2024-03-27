import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VarientAttributeRequest } from 'src/app/RequestPayload/varient-attribute-request';
import { VarientCategoryRequest } from 'src/app/RequestPayload/varient-category-request';
import { PostService } from 'src/app/Service/post.service';
import { VarientService } from 'src/app/Service/varient.service';
//import Toast from 'src/app/Util/helper';

@Component({
  selector: 'app-varient-category',
  templateUrl: './varient-category.component.html',
  styleUrls: ['./varient-category.component.css']
})
export class VarientCategoryComponent {
  ngOnInit(): void {
  }
  varientCategory: VarientCategoryRequest = new VarientCategoryRequest();

  msg: string = '';
  subMsg: string = '';
  constructor(private varientService: VarientService,private route:Router,private post:PostService) { }

  
  onSubmit() {
    if (this.varientCategory.name != null && this.varientCategory.name != undefined && this.varientCategory.name != '') {
     
      let index=this.checkDublicate(this.varientCategory.categoryAttributes);
      if (index===-2) {
        this.varientService.addVarientCategory(this.varientCategory).subscribe((result:any) => {
          
          // Toast.fire({
          //   icon: 'success',
          //   title: result.response.message,
          // })
          this.post.showSuccess(result.response.message,'Success')
          .then((e: any)=>{
            this.route.navigate(['/admin/varientmanage']);
          })  
        }, (error) => {
          // Toast.fire({
          //   icon: 'error',
          //   title: error.error.message
          // })
          this.post.showerror(error.error.message,'Error')
        })
      }
      else if(index===-1){
        this.msg= "Dublicate subcategory not allowed"
      }
      else if(index===-3)
      {
        this.msg = "Please add atleast one Attribute"
      }
      else
      this.msg = "This field required";
    }
    else {
      this.msg = "This field required";

    }
  }
  addVarientAttribute() {
  const newVarientSubCategory: VarientAttributeRequest = new VarientAttributeRequest();
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
 if(arr.length==0)
    {
      return -3;
    }
  if(arr[0].attributeName===null || arr[0].attributeName===undefined || arr[0].attributeName===''){
  return 0;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i+1].attributeName===null || arr[i+1].attributeName===undefined || arr[i+1].attributeName==='')
    {
      return i;
    }
    if (arr[i].attributeName == arr[i + 1].attributeName) {
      count++;
    }
  }
  if (count != 0)
    return -1;
  else
    return -2;
}
}
