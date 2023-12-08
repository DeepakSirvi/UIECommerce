import { RoleName } from "./role-name";
import { UserRole } from "./user-role";

export class Role {
    id: number = 0;
    roleName: RoleName = RoleName.CUSTOMER; // Assuming RoleName is an enum with a 'Default' value
    description: string = '';
    createdAt: string = '';
    updatedAt: string = '';
    userRole: UserRole[] = [];
  
}
