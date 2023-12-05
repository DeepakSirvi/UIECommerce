import { Role } from "./role";
import { User } from "./user";

export interface UserRole {
    id: number;
  role: Role;
  user: User;
}
