import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Brand } from 'src/app/Model/brand';
import { User } from 'src/app/Model/user';
import { LoginService } from 'src/app/Service/AuthService/login.service';
import { BrandService } from 'src/app/Service/brand.service';
import { PostService } from 'src/app/Service/post.service';
import { AppRoutes } from 'src/app/Util/appRoutes';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})



export class BrandsComponent  implements OnInit{


length = 50
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [1, 2, 5];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent!: PageEvent;

  user:User =new User();
  brandlist:Brand[]=[]
  imageUrl= AppRoutes.imageUrl

  // brandlist = new Map<string, Object>();
  constructor( private brand:BrandService, private login:LoginService,private router:Router, private post: PostService){}
  ngOnInit(): void {
 this.getAllBrand();
  }
  


getAllBrand(){
  this.brand.getAllBrand(this.pageIndex,this.pageSize).subscribe({
    next:(data:any)=>{
      this.brandlist = data.AllBrand
    },error:(er:any)=>{

    }
  })
}
handlePageEvent(e: PageEvent) {
  this.pageEvent = e;
  this.length = e.length;
  this.pageSize = e.pageSize;
  this.pageIndex = e.pageIndex;
  this.getAllBrand();
}


 

deleteBrand(id:any,index:any){
  this.brand.deleteBrand(id).subscribe({
    next: (data: any) =>{
      this.post.showSuccess('Brand Deleted','Success')
      this.brandlist.splice(index,1);
    
    },
    error:(er:any)=>{
      this.post.showerror('Brand Not Deleted','Error')
    }

  })
}
}
