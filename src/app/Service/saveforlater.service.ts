import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRoutes } from '../Util/appRoutes';

@Injectable({
  providedIn: 'root'
})
export class SaveforlaterService {

  constructor(private http:HttpClient) { }

  public addToSaveForLater(id:any){
    return this.http.post(AppRoutes.ADD_SAVE_FOR_LATER+"/"+id,{});
  }

}
