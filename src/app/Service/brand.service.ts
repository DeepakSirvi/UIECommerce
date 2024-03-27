import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRoutes } from '../Util/appRoutes';
import { Brand } from '../Model/brand';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  params: any;

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

  public updateBrand (brand:any,file:any)
  {
   
    let formData: FormData = new FormData
    formData.append('brandRequest', JSON.stringify(brand))
    formData.append('brandImage', file)

              
    return this.http.put(AppRoutes.UPDATE_BRAND, formData);

  }

  public getBrandId(id:any){
    return this.http.get(AppRoutes.GETBYID_Brand +id);
  }

 public getAllVerifiedBrand() {

     return this.http.get(AppRoutes.GETALLVERIFIEDBRAND);

 }

}
