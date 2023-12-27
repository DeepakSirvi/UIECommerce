import { Status } from "./status";
import { User } from "./user";

export class BankAccount {
    id: string = '';
  accountNumber: string = '';
  accountHolderName: string = '';
  bankName: string = '';
  bankIFSCcode: string = '';
  venderGSTnumber: string = '';
  panNumber: string = '';
  status: Status = Status.ACTIVE;
  user: User = new User();
}
