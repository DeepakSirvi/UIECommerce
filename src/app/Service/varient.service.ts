import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRoutes } from '../Util/appRoutes';
import { VarientCategoryRequest } from '../RequestPayload/varient-category-request';
import { Observable } from 'rxjs';
import { StatusRequest } from '../RequestPayload/status-request';

@Injectable({
  providedIn: 'root'
})
export class VarientService {

  constructor(private http:HttpClient) { }

  public addVarientCategory(data:VarientCategoryRequest){
    return  this.http.post(AppRoutes.ADD_VARIENT,data);
  }
  public  getCategories(){
    return this.http.get(AppRoutes.ADD_VARIENT);
  }

  public updateVarientCategoryById(varientCategory:any)
  {
    return this.http.put(AppRoutes.ADD_VARIENT,varientCategory);
  }

  public getVarientList(varientSearch:string,pageIndex:number,pageSize:number,sortDir:string) {
    return this.http.get(AppRoutes.VARIENT_LIST+"?varientSearch="+`${varientSearch}`+"&pageIndex="+`${pageIndex}`+"&pageSize="+`${pageSize}`+"&sortDir="+`${sortDir}`
                        );
  }
  public addVarient(formData:FormData,headers:HttpHeaders){
    return this.http.post(AppRoutes.Add_PRODUCT_VARIENT+"/",formData,{headers});
  }

  public deleteVarientById(id:number){
    return this.http.delete(AppRoutes.ADD_VARIENT+"/"+id);
  }
   
  public deleteSubVarientById(id:number){
    return this.http.delete(AppRoutes.ADD_SUBVARIENT+"/"+id);
  }
  public getVarient(id:number){
    return this.http.get(AppRoutes.GET_ONE_ACTIVE_VARIENT+"/"+id);
  }

  public getVarientById(id:string){
    return this.http.get(AppRoutes.GET_VARIENT_BY_ID+"/"+id);
  }

  public getVarientByJoin(attributeId:any,id:any,productId:any){
    return this.http.post(AppRoutes.GET_VAREINT_BY_JOIN+"/"+id+"/"+productId,attributeId);
  }

  public updateActiveVarient(status:string,id:any){
    const statusRequest:StatusRequest = new StatusRequest(id,status);
    return this.http.patch(AppRoutes.UPDATESTATUSVARIENT,statusRequest);
  }
}
