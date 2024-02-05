import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRoutes } from '../Util/appRoutes';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  addToWishList(id:any){
    return this.http.post(AppRoutes.ADD_WISHLIST+"?varientId="+`${id}`,{});
  }

  isProductAddToWishList(id:any){
    return this.http.get(AppRoutes.CHECK_IN_WISHLIST+"/varientExist"+"?varientId="+`${id}`);
  }
  removeToWishList(id:any)
  {
    return this.http.delete(AppRoutes.DELETE_WISHLIST +"?varientId="+`${id}`);
  }

  getWishlist(){
    return this.http.get(AppRoutes.CHECK_IN_WISHLIST+"/all");
  }
}
