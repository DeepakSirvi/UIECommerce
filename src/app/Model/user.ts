import { UserRole } from "./user-role";

export class User {

  id: number = 0;
  userMobile: string = '';
  userEmail: string = '';
  firstName: string = '';
  lastName?: string = '';
  gender: string = '';
  userRole: UserRole[] = [];
}
