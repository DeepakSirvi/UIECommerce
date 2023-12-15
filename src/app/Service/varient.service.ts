import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRoutes } from '../Util/appRoutes';
import { VarientRequest } from '../RequestPayload/varient-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VarientService {

  constructor(private http:HttpClient) { }

  addVarientCategory(data:VarientRequest){
    return  this.http.post(AppRoutes.ADD_VARIENT,data);
  }
  getCategories(){
    return this.http.get(AppRoutes.ADD_VARIENT);
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', '', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  addVarient(formData:FormData,headers:HttpHeaders){
    return this.http.post(AppRoutes.Add_PRODUCT_VARIENT,formData,{headers});
  }
}
