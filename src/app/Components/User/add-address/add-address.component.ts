import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/Model/address';
import { AddressService } from 'src/app/Service/AuthService/address.service';
import { PostService } from 'src/app/Service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
// id: string = '';
// name: string = '';
// mobile: string = '';
// pincode: number  = 0;
// locality: string = '';
// city: string = '';
// city: string = '';
// landMark: string = '';
// alternateMobile: string = '';
// addressType: string = '';
export class AddAddressComponent implements OnInit {
  address: Address = new Address()
  myForm: FormGroup;
  constructor(private addressservice: AddressService, private post: PostService, private route: Router, private fs: FormBuilder) {
    this.myForm = this.fs.group({
      name: ['', Validators.required],
      pincode: ['', Validators.required],
      phone: ['', Validators.required],
      locality: ['', Validators.required],
      landmark: ['', Validators.required],
      city: ['', Validators.required],
      alternateMobile: ['', Validators.required],
      addressType: ['', Validators.required],
      state: ['', Validators.required],
    })

  }


  ngOnInit(): void {
   
  }


  public AddAddress() {
    this.myForm.markAllAsTouched();
    if(this.myForm.invalid){
      return
    } 
   
else{
       this.addressservice.addAddress(this.address).subscribe({
      next: (data: any) => {
        console.log(data);
        this.post.showSuccess('Succesfully added', 'Success')
        this.route.navigate(['/customer/account'])
      },
      error: (er: any) => {
        this.post.showerror('Error Added', 'Error')
      }
    })

  }
}
}
