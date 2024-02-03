import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private tost: ToastrService) { }


  showSuccess(title: string, message: string, timer?: number) {
    this.tost.success(message,title,{
        timeOut:timer?timer:3000, 
            })
  }
   showerror(title: string, message: string, timer?: number) {   
  this.tost.error(message,title,{
    timeOut:timer?timer:3000, 
  })
 }
}
