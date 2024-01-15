import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from 'src/app/Service/AuthService/login.service';

export const loginGuardGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
   if(loginService.isLoggedIn())
   {
    router.navigate(['customer/home']);
    return false;
   }
  return true;
};
