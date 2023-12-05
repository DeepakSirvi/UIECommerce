import { UserRole } from "./user-role";

export interface User {

    id: number;
  userMobile: string;
  userEmail: string;
  firstName: string;
  lastName?: string; // Optional property (since it's not marked as @Column(nullable = false))
  gender: string;
  // Other properties specific to the User entity
  userRole: UserRole[]; // Assuming a user can have multiple roles
}
