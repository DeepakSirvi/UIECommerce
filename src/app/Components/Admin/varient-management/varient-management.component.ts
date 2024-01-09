import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Varient } from 'src/app/Model/varient';
import { VarientCategory } from 'src/app/Model/varient-category';
import { VarientCategoryRequest } from 'src/app/RequestPayload/varient-category-request';
import { VarientService } from 'src/app/Service/varient.service';
import Toast from 'src/app/Util/helper';

@Component({
  selector: 'app-varient-management',
  templateUrl: './varient-management.component.html',
  styleUrls: ['./varient-management.component.css']
})
export class VarientManagementComponent {
  ngOnInit(): void {
    this.getAllVarient();
  }

  constructor(private varientService:VarientService){}
  singleVarient:VarientCategory = new VarientCategory();
  varient:VarientCategory[]=[];
  varientSearch:string='';
  sortDir:string="ASC";
 

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
    this.getAllVarient();
  }
  getAllVarient() {
    this.varientService.getVarientList(this.varientSearch,this.pageIndex,this.pageSize,this.sortDir).subscribe((result:any)=>{
     this.varient = result.AllVarientCategory.content;
     console.log(this.varient);
     
     this.length=result.AllVarientCategory.totalElements;
    })
  }
  deleteVarient(id:any){
    alert();
    this.varientService.deleteVarientById(id).subscribe((data:any)=>{
      Toast.fire({
        icon: 'success',
        title: data.message,
      }).then(e=>{
        this.getAllVarient();
      })  

    },(error)=>{
      Toast.fire({
        icon: 'error',
        title: error.error.message
      })
    })
  }
  deleteSubVarient(id:any){
    this.varientService.deleteSubVarientById(id).subscribe((data:any)=>{
      Toast.fire({
        icon: 'success',
        title: data.message,
      }).then(e=>{
        this.getAllVarient();
      })  

    },(error)=>{
      Toast.fire({
        icon: 'error',
        title: error.error.message
      })
    })
  }

  getVarientByIds(id:string){
    this.varientService.getVarientById(id).subscribe((result:any)=>{
      this.singleVarient = result;
    })
  }
}
