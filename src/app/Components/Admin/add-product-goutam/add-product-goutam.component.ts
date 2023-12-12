import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from 'src/app/Model/category';
import { SubCategory } from 'src/app/Model/sub-category';
import { ProductRequest } from 'src/app/RequestPayload/product-request';
import { CategoryService } from 'src/app/Service/category.service';
@Component({
  selector: 'app-add-product-goutam',
  templateUrl: './add-product-goutam.component.html',
  styleUrls: ['./add-product-goutam.component.css'],
  

})
export class AddProductGoutamComponent implements OnInit {

  categories:Category[]=[];
  newCategory:Category = new Category();
  product:ProductRequest = new ProductRequest();
  constructor(private catService:CategoryService) {}
  ngOnInit(): void {
    this.catService.getCategories().subscribe((result:any)=>{
      this.categories = result.AllCategory;
    });
  }

  productAddForm = new FormGroup({
    productName:new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^[a-zA-Z ]*$/),
    ]
    ),
    brandName:new FormControl('',
    [
      Validators.required,
    ]
    ),
    shippingProvider:new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^[a-zA-Z ]*$/),
      Validators.maxLength(30),
      Validators.minLength(3)
    ] 
    ),
    fullfillmentName:new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^[a-zA-Z ]*$/),
      Validators.maxLength(30),
      Validators.minLength(3)
    ]
    ),
    deliveryCharge: new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^(\p{Sc}\s*)?(\d+(\.\d{1,2})?)?$/u)
    ]
    ),
    productWeight: new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^(\d+(\.\d{1,2})?)\s*(gram|kilogram|kg|g|ton|metric ton|t)?$/i),
    ]
    ),
    productLength: new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^(\d+(\.\d{1,2})?)\s*(mm|cm|m|in|inch|foot)?$/i)
    ]
    ),
    productWidth: new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^(\d+(\.\d{1,2})?)\s*(mm|cm|m|in|inch|foot)?$/i)
    ]
    ),
    productHeight: new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^(\d+(\.\d{1,2})?)\s*(mm|cm|m|in|inch|foot)?$/i)
    ]
    ),
    taxCode: new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^([^\d]*)(\w+)$/i)
    ]
    ),
    countryOrigin: new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^([^\d]+)$/i)
    ]
    ),
    productType: new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^([a-zA-Z0-9\s]+)$/i)
    ]
    ),
    discription: new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^[\w\s\d\-.,:;!@#$%^&*()_+={}\[\]|\\:;"'<>,.?\/]+$/i)
    ]
    ),
    title: new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s.,!?'":;()-]+$/)
    ]
    ),
    category:new FormControl('',
    [
      Validators.required
    ]
    ),
    subCategory: new FormControl('',
    [
      Validators.required
    ] 
    )
    
  })

  get productName() {
    return this.productAddForm.get('productName');
  }
  get brandName() {
    return this.productAddForm.get('brandName');
  }
  get shippingProvider() {
    return this.productAddForm.get('shippingProvider');
  }
  get fullfillmentName() {
    return this.productAddForm.get('fullfillmentName');
  }
  get deliveryCharge() {
    return this.productAddForm.get('deliveryCharge');
  }
  get productWeight() {
    return this.productAddForm.get('productWeight');
  }
  get productLength() {
    return this.productAddForm.get('productLength');
  }
  get productWidth() {
    return this.productAddForm.get('productWidth');
  }
  get productHeight() {
    return this.productAddForm.get('productHeight');
  }
  get taxCode() {
    return this.productAddForm.get('taxCode');
  }
  get countryOrigin() {
    return this.productAddForm.get('countryOrigin');
  }
  get productType() {
    return this.productAddForm.get('productType');
  }
  get discription() {
    return this.productAddForm.get('discription');
  }
  get title() {
    return this.productAddForm.get('title');
  }
  get category() {
    return this.productAddForm.get('category')
  }
  get subCategory() {
    return this.productAddForm.get('subCategory')
  }
   
  
  productAdd() {
    console.log(this.product);
  }

  setCategory(data:any){
    const selectedValue = (data.target as HTMLSelectElement).value;
    this.newCategory = this.categories.find(category => category.categoryName === selectedValue) as Category;
  }

}