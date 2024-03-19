import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRoutes } from '../Util/appRoutes';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  
  navbar:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  navbarCount:Observable<any> = this.navbar.asObservable();
  public addToCart(varientId:any,quantity:any){
    return this.http.post(AppRoutes.ADD_CART+"/"+ varientId+"/"+quantity,{});
  }

  public getCart(){
    return this.http.get(AppRoutes.GET_CART);
  }

  public deleteCartItem(id:any){
    return this.http.delete(AppRoutes.GET_CART+"/"+id);
  }

  getTotalCount(){
    return this.http.get(AppRoutes.CART_WISH_COUNT);
  }
}
