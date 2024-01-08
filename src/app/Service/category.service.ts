import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryRequest } from '../RequestPayload/category-request';
import { AppRoutes } from '../Util/appRoutes';
import { Category } from '../Model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {}

  public addCategory(data:CategoryRequest) {
    return this.http.post(AppRoutes.ADD_CATEGORY,data);
  }

  public getCategoriesList(categorySearch:string,pageIndex:number,pageSize:number,sortDir:string) {
    return this.http.get(AppRoutes.CATEGORY_LIST +"?categorySearch="+`${categorySearch}`+"&pageIndex="+`${pageIndex}`+"&pageSize="+`${pageSize}`+"&sortDir="+`${sortDir}`);
  }

  public getCategories(){
    return this.http.get(AppRoutes.GETALL_CATEGORY);
  }

  public getCategoryByIds(id:string){
    return this.http.get(AppRoutes.GET_SINGLE_CATEGORY+"/"+id);
  }

  public deleteCategoryById(id:number){
    return this.http.delete(AppRoutes.ADD_CATEGORY+"/"+id);
  }
   
  public deleteSubCategoryById(id:number){
    return this.http.delete(AppRoutes.ADD_SUBCATEGORY+"/"+id);
  }

  public updateCategoryById(category:Category) {
    return this.http.put(AppRoutes.UPDATE_CATEGORY_BY_ID,category);
  }
}
