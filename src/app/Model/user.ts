import { UserRole } from "./user-role";

export class User {

  id: string = '';
  userMobile: string = '';
  userEmail: string = '';
  firstName: string = '';
  lastName?: string = '';
  gender: string = '';
  userRole: UserRole[] = [];
}
