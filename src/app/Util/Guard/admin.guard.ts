import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { LoginService } from 'src/app/Service/AuthService/login.service';
import { inject } from '@angular/core';
import { UserRole } from 'src/app/Model/user-role';


export const adminGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const isLoggedIn = loginService.isLoggedIn();
  const router = inject(Router);

  if(isLoggedIn)
  {  
    const  userRole:UserRole[] = loginService.getUserRole(); 
    const isAdmin = userRole.some(data => data.role.roleName === 'ADMIN');
      if(isAdmin)
      {
        return true;     
      }
    router.navigate(['']);
   return false;
  }
  else{
    router.navigate(['']);
    return false
  }
};
