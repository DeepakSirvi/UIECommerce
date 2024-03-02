import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, SelectControlValueAccessor, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/Model/brand';
import { BrandService } from 'src/app/Service/brand.service';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})



export class AddBrandComponent implements OnInit {
  brand: Brand = new Brand()
  myForm: FormGroup 
  file:any
  constructor(private brandservice: BrandService, private router: Router, private post: PostService, private fs: FormBuilder) {
    this.myForm = this.fs.group({

      brandname: ['', Validators.required],
      brandDescription: ['', Validators.required],
      brandImage: ['', Validators.required]

    })

  }
  ngOnInit(): void {

  }


  public addBrand() {

    if (this.myForm.invalid) {
     
      
      return
    }
     else {


      this.brandservice.addBrand(this.brand,this.file).subscribe({
        next: (data: any) => {
          console.log(data);
          this.post.showSuccess('Successfully Added', 'Success')
          this.router.navigate(['/admin/brands'])

        },

        error: (er: any) => {
          this.post.showerror('Error Not Added', 'Error')
        }

      })
  }
  }



  public addImageFile(event: any) {
    this.file= event.target.files[0];
  }

}