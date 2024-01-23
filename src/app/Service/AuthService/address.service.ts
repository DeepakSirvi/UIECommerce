import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRoutes } from 'src/app/Util/appRoutes';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  public findByUserId(id: any) {

    return this.http.get<any>(AppRoutes.GETUSER_ADDRESS + id);
  }
  public updateAddress(){
    return this.http.put(AppRoutes.UPDATE_ADDRESS,null);
  }
} 
