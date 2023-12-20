import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NotificationRequest } from 'src/app/RequestPayload/notification-request';
import { NotificationService } from 'src/app/Service/notification.service';
import Toast from 'src/app/Util/helper';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  public Editor = ClassicEditor;
  notification:NotificationRequest = new NotificationRequest()

  constructor(private notify:NotificationService){}

  onSubmit(){
    this.notify.addNotification(this.notification).subscribe((result:any)=>{
      Toast.fire({
        icon:'success',
        title:result.response.message
      })
    },(error)=>{
      Toast.fire({
        icon:'error',
        title:error.error.message
      })
    })
  }

}
