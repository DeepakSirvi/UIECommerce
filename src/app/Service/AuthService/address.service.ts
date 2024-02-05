import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from 'src/app/Model/address';
import { AppRoutes } from 'src/app/Util/appRoutes';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  id: any;

  constructor(private http: HttpClient) { }

  public findByUserId(id: any) {

    return this.http.get<any>(AppRoutes.GETUSER_ADDRESS + id);
  }
  public updateAddress(id:number,address:any){
    return this.http.put(AppRoutes.UPDATE_ADDRESS+`${id}`,address);
  }

  public addAddress(address:Address){
    return this.http.post<any>(AppRoutes.ADD_ADDRESS,address);
    
  }
  public getAddressId(id:any){
    return this.http.get(AppRoutes.GETBYID_ADDRESS +id);
  }
  public deleteAddress(id:any){
    return this.http.delete(AppRoutes.DELETE_ADDRESS +id);
  }
} 
