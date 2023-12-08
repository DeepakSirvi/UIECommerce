import { Injectable } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';
import { LoginService } from '../Service/AuthService/login.service';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {


  constructor(private loginService: LoginService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    // add the jwt token from lcal storge to header
    let authReq = request;
    console.log("In intercepter")
    const token = this.loginService.getToken();
    if (token != null) {
        authReq = authReq.clone({
            setHeaders: { Authorization: `${token}` }
        });

        console.log("In intercepter with token set");
    }
            
    console.log("In intercepter without token");
    return next.handle(request);
  }
}

export const authInterceptorProviders = [{
  provide: HTTP_INTERCEPTORS,
  useClass: MyInterceptorInterceptor,
  multi: true,
},];
