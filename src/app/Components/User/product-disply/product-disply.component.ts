import { Attribute, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { ProductImage } from 'src/app/Model/product-image';
import { Varient } from 'src/app/Model/varient';
import { VarientAttribute } from 'src/app/Model/varient-attribute';
import { VarientCategoryJoin } from 'src/app/Model/varient-category-join';
import { VarientCategoryJoinRequest } from 'src/app/RequestPayload/varient-category-join-request';
import { LoginService } from 'src/app/Service/AuthService/login.service';
import { CartService } from 'src/app/Service/cart.service';
import { ProductsService } from 'src/app/Service/products.service';
import { VarientService } from 'src/app/Service/varient.service';
import { WishlistService } from 'src/app/Service/wishlist.service';
import { AppRoutes } from 'src/app/Util/appRoutes';
import Toast from 'src/app/Util/helper';

@Component({
  selector: 'app-product-disply',
  templateUrl: './product-disply.component.html',
  styleUrls: ['./product-disply.component.css']
})
export class ProductDisplyComponent {
  productId!:number;
  product!:Product;
  varient!:Varient;
  var:any;
  imageUrl:string=AppRoutes.imageUrl;
  borderindex=0;
  isPresent=false;
  constructor(private varientService:VarientService,private cart:CartService,private wishlistService:WishlistService,private route:ActivatedRoute,private productService:ProductsService,private router:Router){
    this.productId= this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
   this.getProduct();
  }

  getProduct(){
    this.productService.getProductById(this.productId).subscribe((data:any)=>{
      this.product=data.Product;
      this.var=data.Var; 
      this.varientService.getVarient(this.productId).subscribe((data:any)=>{
        this.varient=data.varient;
        this.wishlistService.isProductAddToWishList(this.varient.id).subscribe((data:any)=>{
          this.isPresent=data.isPresent;
         },(error)=>{
           Toast.fire({
             icon: 'error',
             title: error.error.message
           })
         });
        if(this.varient.productImage.length===0)
        {
          this.varient.productImage.push(new ProductImage(this.product.productImage));
        }
      })
     },(error)=>{
      Toast.fire({
        icon: 'error',
        title: error.error.message
      })
      this.router.navigate(['/admin/productslist'])
     }) 
  }

  getVarDataArray(): { key: string, value: any[] }[] {
    return this.var ? Object.keys(this.var).map(key => ({ key, value: this.var[key] })) : [];
  }
  borderActivated(index:number){
    this.borderindex=index
  }

  findCommonAttributes(values: any): string {
    if (this.varient.categoryJoins.some(varientAttribute => varientAttribute.varAttribute.id === values)) {
      return 'highlighted';
    } else {
      return '';  // Return an appropriate value when the condition is not met
    }
  }

  getVarient(id:any,varientCat:any){
    const catJoin=this.varient.categoryJoins;
    const attributeId:String[]=[];
    for (const categoryJoin of this.varient.categoryJoins) {
      if(categoryJoin.varAttribute.varientCategory.name === varientCat)
      {
        attributeId.push(id);
      }
      else
      {
        attributeId.push(categoryJoin.varAttribute.id);
      } 
    }
    console.log(attributeId);
     this.varientService.getVarientByJoin(attributeId,id,this.productId).subscribe((data:any)=>{
      this.varient=data.varient
      if(this.varient.productImage.length===0)
      {
        this.varient.productImage.push(new ProductImage(this.product.productImage));
      }
     },(error)=>{
      Toast.fire({
        icon:'error',
        title:error.error.message
      })
     })
  }

  
  addToWishList(id:any){
    if(!this.isPresent){
    this.wishlistService.addToWishList(id).subscribe((data:any)=>{
      Toast.fire({
        icon: 'success',
        title: data.response
      })
      this.getProduct();
      this.cart.navbar.next(Math.random());
    },(error)=>{
      Toast.fire({
        icon: 'error',
        title: error.error.message
      })
    })
  }
  else{
    this.wishlistService.removeToWishList(id).subscribe((data:any)=>{
      Toast.fire({
        icon: 'success',
        title: data.response
      })
      this.getProduct();
    },(error)=>{
      Toast.fire({
        icon: 'error',
        title: error.error.message
      })
    })
  }
  }

  checkVarientIsAddedToWishlist(id :any) : any
  {
  if(this.isPresent)
  {
    return 'fi fi-ss-heart'
  }
  else
  {
    return 'fi fi-rs-heart'
  }
  }
}
