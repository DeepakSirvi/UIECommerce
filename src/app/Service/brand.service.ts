import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRoutes } from '../Util/appRoutes';
import { Brand } from '../Model/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor( private  http: HttpClient) { }


  public addBrand(brand:Brand ,file:any){
    let formData:FormData =  new FormData
    formData.append('brandRequest',JSON.stringify(brand))
    formData.append('brandImage',file) 
   
    
    return this.http.post(AppRoutes.ADD_BRAND,formData);
  }
}
