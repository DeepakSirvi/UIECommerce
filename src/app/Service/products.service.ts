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
  proReq:ProductRequest=new ProductRequest();
  addProduct(data:any){
    this.proReq.productName=data.productName;
    this.proReq.brand=data.brandName;
    this.proReq.fullfillmentBy=data.fullfillmentName;
    this.proReq.deliveryCharge=data.deliveryCharge;
    this.proReq.productWeight=data.productWeight;
    this.proReq.productHeight=data.productHeight;
    this.proReq.productWidth=data.productWidth;
    this.proReq.taxCode=data.taxCode;
    this.proReq.description.description=data.discription;
    this.proReq.productType=data.productType;
    this.proReq.countryOfOrigin=data.countryOrigin;
    this.proReq.productLength=data.productLength;
    this.proReq.shippingProvider=data.shippingProvider;
    this.proReq.subCategory.id=data.subCategory;
    return this.http.post(AppRoutes.ADD_PRODUCT,this.proReq);
  }

  getAllProduct(productSearch:string,pageIndex:number,pageSize:number,sortDir:string){
    return this.http.get(AppRoutes.GET_ALL_PRODUCT +"?productSearch="+`${productSearch}`+"&pageIndex="+`${pageIndex}`+"&pageSize="+`${pageSize}`+"&sortDir="+`${sortDir}`);
  }

  getProductById(id:number){
    return this.http.get(AppRoutes.GET_PRODUCT + id);
  }
}
