import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { VarientService } from 'src/app/Service/varient.service';
import { VarientPRequest } from 'src/app/RequestPayload/varient-prequest';
import { VarientCategory } from 'src/app/Model/varient-category';
import { VarientAttribute } from 'src/app/Model/varient-attribute';

@Component({
  selector: 'app-add-varient',
  templateUrl: './add-varient.component.html',
  styleUrls: ['./add-varient.component.css']
})
export class AddVarientComponent {
  varientCategory: VarientCategory[] = [];
  images: { url: string }[] = [];
  filess: File[] = [];
  varientRequest: VarientPRequest = new VarientPRequest();
  selectedValues: { category: string, attribute: string }[] = [];
  newVarientCategory!:VarientCategory;

  constructor(private varientService: VarientService) {}

  ngOnInit(): void {
    this.varientRequest.productId = 102;
    this.getAllVarient();
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

  onSubmit() {
    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });

    const formData: FormData = new FormData();
    formData.append('varientRequest', JSON.stringify(this.varientRequest));
    for (const image of this.filess) {
      formData.append('file', image);
    }

    this.varientService.addVarient(formData, headers).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAllVarient() {
    this.varientService.getCategories().subscribe((result: any) => {
      this.varientCategory = result.AllVarientCategory;
    });
  }

  

  setCategory(data: any) {
    const selectedValue = (data.target as HTMLSelectElement).value;
    const attributeValues = this.varientCategory
      .find(category => category.name === selectedValue)?.categoryAttributes.map(attr => attr.attributeName) || [];
      this.newVarientCategory = this.varientCategory.find(category => category.name === selectedValue) as VarientCategory;
      this.selectedValues[this.selectedValues.length] = { category: selectedValue, attribute: '' };
    
  }

  setAttribute(data: any) {
    const selectedValue = (data.target as HTMLSelectElement).value;
    this.selectedValues[this.selectedValues.length-1].attribute = selectedValue;
  }

  deleteAttribute(i:any){
       this.selectedValues.splice(i,1);
  }
}
