import { RoleName } from "./role-name";
import { UserRole } from "./user-role";

export interface Role {

    id: number;
    roleName: RoleName;
    description: string;
    createdAt: string; // Assuming LocalDateTime is converted to a string
    updatedAt: string; // Assuming LocalDateTime is converted to a string
    userRole: UserRole[];
}
