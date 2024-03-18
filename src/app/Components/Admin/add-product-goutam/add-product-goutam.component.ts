import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { retry } from 'rxjs';
import { Category } from 'src/app/Model/category';
import { SubCategory } from 'src/app/Model/sub-category';
import { ProductRequest } from 'src/app/RequestPayload/product-request';
import { CategoryService } from 'src/app/Service/category.service';
import { PostService } from 'src/app/Service/post.service';
import { ProductsService } from 'src/app/Service/products.service';
//import Toast from 'src/app/Util/helper';
@Component({
  selector: 'app-add-product-goutam',
  templateUrl: './add-product-goutam.component.html',
  styleUrls: ['./add-product-goutam.component.css'],
  

})
export class AddProductGoutamComponent implements OnInit {
  file!: File ;
  image: { url: string } | null = null;
  submitted=false
  productAddForm!:FormGroup
  categories:Category[]=[];
  newCategory:Category = new Category();
  product:ProductRequest = new ProductRequest();
  public Editor =ClassicEditor;
  constructor(private catService:CategoryService,private productService:ProductsService,private formBuilder:FormBuilder,private route:Router,private post:PostService) {}
 
  ngOnInit(): void {
    this.productAddForm = this.formBuilder.group({
      productName:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9,' -]*$/)]],
      brandName:['',Validators.required],
      shippingProvider:['',[Validators.required,Validators.maxLength(30),Validators.minLength(3)]], 
      fullfillmentName:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/),Validators.maxLength(30),Validators.minLength(3)]],
      deliveryCharge:['',[Validators.required,Validators.pattern(/^(\p{Sc}\s*)?(\d+(\.\d{1,2})?)?$/u)]],
      basicPrice:['',[Validators.required,Validators.pattern(/^(\p{Sc}\s*)?(\d+(\.\d{1,2})?)?$/u)]],
      productWeight:['',[Validators.required,Validators.pattern(/^(\d+(\.\d{1,2})?)\s*(gram|kilogram|kg|g|ton|metric ton|t)?$/i)]],
      productLength:['',[Validators.required,Validators.pattern(/^(\d+(\.\d{1,2})?)\s*(mm|cm|m|in|inch|foot)?$/i)]],
      productWidth:['',[Validators.required,Validators.pattern(/^(\d+(\.\d{1,2})?)\s*(mm|cm|m|in|inch|foot)?$/i)]],
      productHeight:['',[Validators.required,Validators.pattern(/^(\d+(\.\d{1,2})?)\s*(mm|cm|m|in|inch|foot)?$/i)]],
      taxCode:['',[Validators.required,Validators.pattern(/^([^\d]*)(\w+)$/i)]],
      countryOrigin:['',[Validators.required,Validators.pattern(/^([^\d]+)$/i)]],
      productType:['',[Validators.required,Validators.pattern(/^([a-zA-Z0-9,' -\s]+)$/i)]],
      discription:['',[Validators.required,Validators.pattern(/^[\w\s\d\-.,:;!@#$%^&*()_+={}\[\]|\\:;"'<>,.?\/]+$/i)]],
      category:['',Validators.required],
      subCategory:['',Validators.required],
      productImage:['',Validators.required]

    })
    this.catService.getCategories().subscribe((result:any)=>{
      this.categories = result.AllCategory;
    });
  }

  isFieldInvalid(field:string):boolean{
    const constant = this.productAddForm.get(field);
    return constant ? constant.invalid && constant.touched:false;
  }

  getCountryList(){
    
  }

  // submitFormInvalid(){
    
  // }
  onSubmit(data:FormGroup){

    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });
    this.productService.addProduct(data.value,this.file).subscribe((result:any)=>{
     
    this.post.showSuccess('Success','Success')
      this.route.navigate(['/admin/productslist']);
     },(error)=>{
    
    this.post.showerror(error.error.message,'Error')
     })
    
  }
  setCategory(data:any){
    const selectedValue = (data.target as HTMLSelectElement).value;
    this.newCategory = this.categories.find(category => category.categoryName === selectedValue) as Category;
  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length == 1 ) {
      const file = event.target.files[0]; 
  
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.image = { url: e.target.result }; 
        this.file = file; 
      };
  
      reader.readAsDataURL(file);
    }
  }

  
}
