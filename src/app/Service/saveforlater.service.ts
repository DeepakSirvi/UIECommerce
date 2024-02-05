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

  
  public getSaveForLater(){
    return this.http.get(AppRoutes.GET_SAVE_FOR_LATER);
  }

  deleteSaveForLater(id:any){
    return this.http.delete(AppRoutes.Delete_SAVE_FOR_LATER+"/"+id);
  }

}
