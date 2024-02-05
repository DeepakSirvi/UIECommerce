export class StatusRequest {
    id!:string;
    status!:string;
   public constructor(id: string, status: string) {
        this.id = id;
        this.status = status;
      }
}
