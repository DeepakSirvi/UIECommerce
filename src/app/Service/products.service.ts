import { Injectable } from '@angular/core';
import { Product } from '../Model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductRequest } from '../RequestPayload/product-request';
import { AppRoutes } from '../Util/appRoutes';
import { StatusRequest } from '../RequestPayload/status-request';
import { StatusBooleanRequest } from '../RequestPayload/status-boolean-request';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  proReq:ProductRequest=new ProductRequest();
  addProduct(data:any,image:File){
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
    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });
    const formData: FormData = new FormData();
    formData.append('productRequest', JSON.stringify(this.proReq));
      formData.append('file', image);
    return this.http.post(AppRoutes.ADD_PRODUCT,formData,{headers});
  }

  getAllProduct(productSearch:string,pageIndex:number,pageSize:number,sortDir:string){
    return this.http.get(AppRoutes.GET_ALL_PRODUCT +"?productSearch="+`${productSearch}`+"&pageIndex="+`${pageIndex}`+"&pageSize="+`${pageSize}`+"&sortDir="+`${sortDir}`);
  }

  getProductById(id:number){
    return this.http.get(AppRoutes.GET_PRODUCT+ "/"+id);
  }

  getAllProductsActive(productSearch:string,pageIndex:number,pageSize:number,sortDir:string){
    return this.http.get(AppRoutes.GET_PRODUCT+"?productSearch="+`${productSearch}`+"&pageIndex="+`${pageIndex}`+"&pageSize="+`${pageSize}`+"&sortDir="+`${sortDir}`);
  }

  updateStatus(status:StatusBooleanRequest){
    return this.http.patch(AppRoutes.UPDATELISTINGSTATUS,status);
  }
}
