import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Model/category';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {
  ngOnInit(): void {
    this.getCategories();
  }

  constructor(private catgoryService:CategoryService){}
  
  categories:Category[]=[]

  getCategories() {
    this.catgoryService.getCategories().subscribe((result:any)=>{
     this.categories = result.AllCategory.content;
    })
  }


}
