import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Shared/Pages/page-not-found/page-not-found.component';
import { AboutComponent } from './User/Pages/about/about.component';
import { ContactUsComponent } from './User/Pages/contact-us/contact-us.component';
import { TermsAndConditionComponent } from './User/Pages/terms-and-condition/terms-and-condition.component';
import { WishlistComponent } from './User/Pages/wishlist/wishlist.component';
import { ShopCartComponent } from './User/Pages/shop-cart/shop-cart.component';
import { AccountComponent } from './Shared/Component/account/account.component';
import { ShopCheckoutComponent } from './User/Pages/shop-checkout/shop-checkout.component';
import { FilterComponent } from './User/filter/filter.component';
import { RegisterComponent } from './User/Pages/register/register.component';
import { ForgotPasswordComponent } from './User/Pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './User/Pages/reset-password/reset-password.component';
import { LoginComponent } from './User/Pages/login/login.component';
import { AdminhomeComponent } from './Admin/Component/adminhome/adminhome.component';
import { DashbordComponent } from './Admin/Component/dashbord/dashbord.component';
import { ProductComponent } from './Admin/Component/product grid/product.component';
import { OderdetailComponent } from './Admin/Component/oderdetails/oderdetail.component';
import { OrderlistComponent } from './Admin/Component/orderlist/orderlist.component';
import { SellerProfileComponent } from './Admin/Component/seller-profile/seller-profile.component';
import { SellercardsComponent } from './Admin/Component/sellercards/sellercards.component';
import { SellerlistComponent } from './Admin/Component/sellerlist/sellerlist.component';
import { Addproductlist1Component } from './Admin/Component/addproductlist1/addproductlist1.component';
import { Addproductlist2Component } from './Admin/Component/addproductlist2/addproductlist2.component';
import { Addproducrtlist3Component } from './Admin/Component/addproducrtlist3/addproducrtlist3.component';
import { Addproducrtlist4Component } from './Admin/Component/addproducrtlist4/addproducrtlist4.component';
import { Transacation1Component } from './Admin/Component/transacation1/transacation1.component';
import { Transacation2Component } from './Admin/Component/transacation2/transacation2.component';
import { ReviewesComponent } from './Admin/Component/reviewes/reviewes.component';
import { BrandsComponent } from './Admin/Component/brands/brands.component';
import { Productsgrid2Component } from './Admin/Component/productsgrid2/productsgrid2.component';
import { ProductslistComponent } from './Admin/Component/productslist/productslist.component';
import { CategoriesComponent } from './Admin/Component/categories/categories.component';
import { Settingsample1Component } from './Admin/Component/settingsample1/settingsample1.component';
import { Settingsample2Component } from './Admin/Component/settingsample2/settingsample2.component';




const routes: Routes = [


  {
    path: "admin",
    component:AdminhomeComponent,
    children:[
{
  path:"",
  component:DashbordComponent
},

{
  path:"product",
  component:ProductComponent
},
{
  path:"orderdetail",
  component:OderdetailComponent
},{
  path:"orderlist",
  component:OrderlistComponent,
  pathMatch:'full'
},
{
  path:"sellerprofile",
  component:SellerProfileComponent,
  pathMatch:'full'
},
{
  path:"sellercard",
  component:SellercardsComponent,
  pathMatch:'full'
},
{
  path:"sellerlist",
  component:SellerlistComponent,
  pathMatch:'full'
},
{
  path:"productlist1",
  component:Addproductlist1Component,
  pathMatch:'full'
},
{
  path:"productlist2",
  component:Addproductlist2Component,
  pathMatch:'full'
},
{
  path:"productlist3",
  component:Addproducrtlist3Component,
  pathMatch:'full'
},
{
  path:"productlist4",
  component:Addproducrtlist4Component,
  pathMatch:'full'
},
{
  path:"transaction1",
  component:Transacation1Component,
  pathMatch:'full'
},
{
  path:"transaction2",
  component:Transacation2Component,
  pathMatch:'full'
},
{
  path:"reviewes",
  component:ReviewesComponent,
  pathMatch:'full'
},
{
  path:"brands",
  component:BrandsComponent,
  pathMatch:'full'
},
{
  path:"productsgrid",
  component:ProductComponent,
  pathMatch:'full'
},
{
  path:"productsgurid2",
  component:Productsgrid2Component,
  pathMatch:'full'
},
{
  path:"productslist",
  component:ProductslistComponent,
  pathMatch:'full'
},
{
  path:"categories",
  component:CategoriesComponent,
  pathMatch:'full'
},
{
  path:"settingsample1",
  component:Settingsample1Component,
  pathMatch:'full'
},
{
  path:"settingsample2",
  component:Settingsample2Component,
  pathMatch:'full'
}
    ]
  },
  {
    path:"user",
    children:[
      {
        path:"about",
        component:AboutComponent
      },
      
      {
        path:"contactUs",
        component:ContactUsComponent
      },
      {
        path:'termsAndCondition',
        component:TermsAndConditionComponent
      },
      {
        path:"wishlist",
        component:WishlistComponent
      },
      {
        path:"cart",
        component:ShopCartComponent
       },
       {
        path:"shopcheckout",
        component:ShopCheckoutComponent

       },
      {
        path:"account",
        component:AccountComponent
      },
      {
        path:"filter",
        component:FilterComponent
      }, 
      {
        path:"login",
        component:LoginComponent
    
       },
       {
         path:"register",
         component:RegisterComponent
       },
       {
        path:"forgotpassword",
        component:ForgotPasswordComponent
       },

       {
        path:"reset-password",
        component:ResetPasswordComponent
       }
        

    ]
  },
  {
    path:"**",
    component:PageNotFoundComponent
  } , 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
