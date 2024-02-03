import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Varient } from 'src/app/Model/varient';
import { VarientAttribute } from 'src/app/Model/varient-attribute';
import { VarientCategory } from 'src/app/Model/varient-category';
import { VarientAttributeRequest } from 'src/app/RequestPayload/varient-attribute-request';
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

  constructor(private varientService: VarientService) { }
  singleVarient: VarientCategory = new VarientCategory();
  varient: VarientCategory[] = [];
  varientSearch: string = '';
  sortDir: string = "ASC";
  msg: string = '';

  length!: number;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [1, 2, 5, 10];

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
    this.varientService.getVarientList(this.varientSearch, this.pageIndex, this.pageSize, this.sortDir).subscribe((result: any) => {
      this.varient = result.AllVarientCategory.content;
      this.length = result.AllVarientCategory.totalElements;
    })
  }
  deleteVarient(id: any) {
    this.varientService.deleteVarientById(id).subscribe((data: any) => {
      Toast.fire({
        icon: 'success',
        title: data.message,
      }).then(e => {
        this.getAllVarient();
      })

    }, (error) => {
      Toast.fire({
        icon: 'error',
        title: error.error.message
      })
    })
  }
  deleteSubVarient(id: any, index: any) {
    if (id == '')
      this.singleVarient.categoryAttributes.splice(index, 1);
    else {
      this.varientService.deleteSubVarientById(id).subscribe((data: any) => {
        Toast.fire({
          icon: 'success',
          title: data.message,
        }).then(e => {
          this.singleVarient.categoryAttributes.splice(index, 1);
          this.getAllVarient();
        })
      }, (error) => {
        Toast.fire({
          icon: 'error',
          title: error.error.message
        })
      })
    }
  }

  getVarientByIds(id: string) {
    this.varientService.getVarientById(id).subscribe((result: any) => {
      this.singleVarient = result.varientCategory;
    })
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  deleteVarientAttribute(index: number) {
    if (this.singleVarient.categoryAttributes.length > 1) {
      this.singleVarient.categoryAttributes.splice(index, 1);
    }
  }
  addVarientAttribute() {
    const newVarientSubCategory: VarientAttribute = new VarientAttribute();
    this.singleVarient.categoryAttributes.push(newVarientSubCategory);

  }

  updatevarientCatByIds() {
    this.varientService.updateVarientCategoryById(this.singleVarient).subscribe((result: any) => {
      this.getAllVarient();
    }, (error) => {
      Toast.fire({
        icon: 'error',
        title: error.error.message
      })
      this.getAllVarient();
    })
  }
}
