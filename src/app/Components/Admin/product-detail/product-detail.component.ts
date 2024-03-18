import { HttpHeaders } from '@angular/common/http';
import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Product } from 'src/app/Model/product';
import { PostService } from 'src/app/Service/post.service';
import { ProductsService } from 'src/app/Service/products.service';
import { VarientService } from 'src/app/Service/varient.service';
import { AppRoutes } from 'src/app/Util/appRoutes';
//import Toast from 'src/app/Util/helper';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public Editor =ClassicEditor;
  productId!:number;
  product!:Product;
  productAddForm!:FormGroup
  file!: File ;
  image!: { url: string }// | null = null;
  imageUrl= AppRoutes.imageUrl
  image1:string =''
  url:any
  on:boolean=false;
  constructor( private formBuilder:FormBuilder,private varientService:VarientService,private route:ActivatedRoute,private productService:ProductsService,private router:Router,private post:PostService){
    this.productId= this.route.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.getProductbyId();
  }
  getProductbyId(){
    this.productService.getProductById(this.productId).subscribe((data:any)=>{
      this.product=data.Product;    
  
     },(error)=>{{
      // Toast.fire({
      //   icon: 'error',
      //   title: error.error.message
      // })
      this.post.showerror(error.error.message,'Error')
      this.router.navigate(['/admin/productslist'])
     }}) 
      setTimeout(() => {
        this.image1 = 
        this.url = this.imageUrl+this.product.productImage
  
        this.productAddForm = this.formBuilder.group({
          productName: [this.product.productName, [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
          brand:[this.product.brand,Validators.required],
          shippingProvider:[this.product.shippingProvider,[Validators.required,Validators.maxLength(30),Validators.minLength(3)]], 
          fullfillmentBy:[this.product.fullfillmentBy,[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/),Validators.maxLength(30),Validators.minLength(3)]],
          deliveryCharge:[this.product.deliveryCharge,[Validators.required,Validators.pattern(/^(\p{Sc}\s*)?(\d+(\.\d{1,2})?)?$/u)]],
          productWeight:[this.product.productWeight,[Validators.required,Validators.pattern(/^(\d+(\.\d{1,2})?)\s*(gram|kilogram|kg|g|ton|metric ton|t)?$/i)]],
          productLength:[this.product.productLength,[Validators.required,Validators.pattern(/^(\d+(\.\d{1,2})?)\s*(mm|cm|m|in|inch|foot)?$/i)]],
          productWidth:[this.product.productWidth,[Validators.required,Validators.pattern(/^(\d+(\.\d{1,2})?)\s*(mm|cm|m|in|inch|foot)?$/i)]],
          productHeight:[this.product.productHeight,[Validators.required,Validators.pattern(/^(\d+(\.\d{1,2})?)\s*(mm|cm|m|in|inch|foot)?$/i)]],
          taxCode:[this.product.taxCode,[Validators.required,Validators.pattern(/^([^\d]*)(\w+)$/i)]],
          countryOrigin:[this.product.countryOfOrigin,[Validators.required,Validators.pattern(/^([^\d]+)$/i)]],
          productType:[this.product.productType,[Validators.required,Validators.pattern(/^([a-zA-Z0-9\s]+)$/i)]],
          discription:[this.product.description,[Validators.required,Validators.pattern(/^[\w\s\d\-.,:;!@#$%^&*()_+={}\[\]|\\:;"'<>,.?\/]+$/i)]],
          subCategory:[this.product.subCategory,Validators.required],
        })
        // this.image!.url=this.imageUrl+ this.product.productImage
        
  
      }, 1000);
  }
  isFieldInvalid(field:string):boolean{
    const constant = this.productAddForm.get(field);
    return constant ? constant.invalid && constant.touched:false;
  }
  
  onSubmit(data:FormGroup){

    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });
    this.productService.addProduct(data.value,this.file).subscribe((result:any)=>{
      // Toast.fire({
      //   icon: 'success',
      //   title: result.response.message
        
      // })
      this.post.showSuccess(result.response.message,'Success')
    },(error)=>{
      // Toast.fire({
      //   icon:'error',
      //   title:error.error.message
      // })
      this.post.showerror(error.error.message,'Error')
    })
  }
  setCategory(data:any){
    // const selectedValue = (data.target as HTMLSelectElement).value;
    // this.newCategory = this.categories.find(category => category.categoryName === selectedValue) as Category;
  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length == 1 ) {
      const file = event.target.files[0]; 
  
      const reader = new FileReader();
      reader.onload = (e: any) => { 
        this.file = file; 
       this.url = e.target.result
      };
      reader.readAsDataURL(file);
    }
  }

  updateActiveVarient(event:any,id:any){
    this.varientService.updateActiveVarient((event.target as HTMLSelectElement).value,id).subscribe((data:any)=>{
      // Toast.fire({
      //   icon: 'success',
      //   title: data.response
      // })
      this.post.showSuccess(data.response,'Success')
      .then((e: any) => {
        this.getProductbyId();
        // this.route.navigate(['/admin/productslist']);
      })
    },(error)=>{
      // Toast.fire({
      //   icon: 'error',
      //   title: error.error.message
      // })
      this.post.showerror(error.error.message,'Error')
      .then((e: any) => {
        this.getProductbyId();
        // this.route.navigate(['/admin/productslist']);
      })
    })


  }
}
