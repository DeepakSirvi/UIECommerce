import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { timer } from 'rxjs';
import { Brand } from 'src/app/Model/brand';
import { BrandService } from 'src/app/Service/brand.service';
import { PostService } from 'src/app/Service/post.service';


@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent implements OnInit {

  brand: Brand = new Brand();
  id: any
  file: any;
  myForm: any;
  constructor(private _brand: BrandService, private fs: FormBuilder, private router: Router,  private post: PostService, private activatedRoute: ActivatedRoute) {

    //   this.myForm = this.fs.group({
    //     name: ['', Validators.required],

    this.myForm = this.fs.group({
      brandname: ['', Validators.required],
      // brandImage: ['', Validators.required],
      brandDescription: ['', Validators.required]
    })
  }
  ngOnInit(): void {
     this.activatedRoute.params.subscribe(p=>{
      this.id=p['id'];
  this.findBrandById(this.id)  
   }) 
  }





  public findBrandById(id: string) {
    this._brand.getBrandId(id).subscribe({
      next: (data: any) => {
        this.brand = data.brand
        this.brand.id=this.id;
      },
      error: (error: any) => {
        console.log(error);

      }
    })
  }



  public updateBrand() {
    if (this.myForm.invalid) {


      return
    }
    else {
      console.log(this.brand);

      this._brand.updateBrand( this.brand, this.file).subscribe({
        next: (data: any) => {

          this.post.showSuccess('Success Update', 'Success')
          timer: 3000;
          this.router.navigate(['/admin/brands'])

        },
        error: (er: any) => {
          this.post.showerror('Error Updated', 'Error')
        }
      });
    }
  }
  public UpdateImageFile(event: any) {
    this.file = event.target.files[0];
  }
}


