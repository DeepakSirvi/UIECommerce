import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRoutes } from '../Util/appRoutes';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  public addToCart(varientId:any,quantity:any){
    return this.http.post(AppRoutes.ADD_CART+"/"+ varientId+"/"+quantity,{});
  }
  public getCart(){
    return this.http.get(AppRoutes.GET_CART);
  }
}
