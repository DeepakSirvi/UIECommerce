import { Role } from "./role";
import { User } from "./user";

export class UserRole {
  id: number = 0;
  role: Role = new Role(); // Assuming Role has default initialization
  user: User = new User(); 
}
