import { HttpEventType, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { VarientPRequest } from 'src/app/RequestPayload/varient-prequest';
import { VarientRequest } from 'src/app/RequestPayload/varient-request';
import { VarientService } from 'src/app/Service/varient.service';

@Component({
  selector: 'app-add-varient',
  templateUrl: './add-varient.component.html',
  styleUrls: ['./add-varient.component.css']
})
export class AddVarientComponent {
  images: { url: string }[] = [];
  filess:File[]=[];
  varientRequest:VarientPRequest = new VarientPRequest();
  constructor(private varientService:VarientService) {}
   
  ngOnInit(): void {
    this.varientRequest.product.id=102;
  }
onFileSelected(event: any): void {
  if (event.target.files) {
    for (const file of event.target.files) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.images.push({ url: e.target.result });
        this.filess.push(file);
      };
      reader.readAsDataURL(file);
    }
  }
}


onSubmit(){ 
  const headers = new HttpHeaders({
    'enctype':'multipart/form-data'
  })
  console.log("Deepak")
  const formData:FormData = new FormData();
  formData.append('varientRequest',JSON.stringify(this.varientRequest));
  // formData.append('file', this.filess);
  for (const image of this.filess) {
    console.log(image);
    formData.append('file', image);
  }
  this.varientService.addVarient(formData,headers).subscribe((data:any)=>{
  console.log(data);
  },(error)=>{
    console.log(error)
  })
}

}
