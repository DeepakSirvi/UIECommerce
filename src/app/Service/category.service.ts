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

  public getCategories() {
    return this.http.get(AppRoutes.ADD_CATEGORY);
  }



}
