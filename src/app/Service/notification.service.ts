import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationRequest } from '../RequestPayload/notification-request';
import { AppRoutes } from '../Util/appRoutes';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient) { }

  public addNotification(data:NotificationRequest){
    return this.http.post(AppRoutes.ADD_NOTIFICATION,data);
  }
}
