import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRoutes } from '../Util/appRoutes';
import { Brand } from '../Model/brand';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  public addBrand(brand: Brand, file: any) {
    let formData: FormData = new FormData
    formData.append('brandRequest', JSON.stringify(brand))
    formData.append('brandImage', file)


    return this.http.post(AppRoutes.ADD_BRAND, formData);
  }

  public findByUserId(id: any) {

    return this.http.get<any>(AppRoutes.GET_BRAND_USERID + `/${id}`);
  }

  public getAllBrand(pageNo: number, pageSize: number) {

    let params = {
      pageNo: pageNo,
      pageSize: pageSize,
    }

    return this.http.get(AppRoutes.GET_ALL_BRAND, { params }); 
  }

  public deleteBrand(id:any){
    return this.http.delete(AppRoutes.Delete_BRAND +id);
  }



}
