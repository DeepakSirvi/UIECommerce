import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRoutes } from '../Util/appRoutes';
import { VarientRequest } from '../RequestPayload/varient-request';

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
}
