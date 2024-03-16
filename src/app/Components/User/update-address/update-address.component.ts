import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timer } from 'rxjs';
import { Address } from 'src/app/Model/address';
import { AddressService } from 'src/app/Service/AuthService/address.service';
import { PostService } from 'src/app/Service/post.service';


@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {
  address: Address = new Address();
  id: any;
  myForm: FormGroup;

  constructor(private _address: AddressService, private route: ActivatedRoute, private post: PostService, private router: Router, private fs: FormBuilder) {
    this.myForm = this.fs.group({
      name: ['', Validators.required],
      pincode: ['', Validators.required],
      mobile: ['', Validators.required],
      locality: ['', Validators.required],
      landmark: ['', Validators.required],
      city: ['', Validators.required],
      alternateMobile: ['', Validators.required],
      addressType: ['', Validators.required],
      state: ['', Validators.required],

    })

  }


  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.address.id = params['id']
      this.findDetailsById(this.address.id)

    })

  }

  findDetailsById(id: any) {
    this._address.getAddressId(id).subscribe({
      next: (data: any) => {
        this.address = data
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  updateAddress() {

    if (this.myForm.invalid) {
      return
    }
    

    else {

      this._address.updateAddress(this.id, this.address).subscribe({
        next: (data: any) => {
        //  console.log(data);
          this.post.showSuccess('Success Updated', 'Success')
           timer:5000;
          this.router.navigate(['/customer/account'])

        },
        error: (er: any) => {
          this.post.showerror('Error Updated', 'Error')
        }
      });
    }

  }
}

