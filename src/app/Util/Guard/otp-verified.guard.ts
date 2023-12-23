import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from 'src/app/Service/AuthService/login.service';

export const otpVerifiedGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  let mobileNumber: any;
  loginService.mobile.subscribe((data: any) => {
    mobileNumber = data;
  })
  if (mobileNumber === null || mobileNumber === undefined) {

    router.navigate(['login']);
    return false;
  }
  return true;
};
