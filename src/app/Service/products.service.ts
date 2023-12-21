import { Injectable } from '@angular/core';
import { Product } from '../Model/product';
import { HttpClient } from '@angular/common/http';
import { ProductRequest } from '../RequestPayload/product-request';
import { AppRoutes } from '../Util/appRoutes';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  addProduct(data:ProductRequest){
    return this.http.post(AppRoutes.ADD_PRODUCT,data);
  }

  getAllProduct(productSearch:string,pageIndex:number,pageSize:number,sortDir:string){
    return this.http.get(AppRoutes.GET_ALL_PRODUCT +"?productSearch="+`${productSearch}`+"&pageIndex="+`${pageIndex}`+"&pageSize="+`${pageSize}`+"&sortDir="+`${sortDir}`);
  }
}
