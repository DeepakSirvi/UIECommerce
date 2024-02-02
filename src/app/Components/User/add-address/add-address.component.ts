import { Component, OnInit } from '@angular/core';
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
export class AddAddressComponent implements OnInit {
  address: Address = new Address()
  constructor(private addressservice: AddressService,private post: PostService) { }


  ngOnInit(): void { 
    
  }


  public AddAddress() {
 console.log(
  this.address
 );
 
    if (this.address.name.trim() == '' || this.address.name == null) {
      return;

    }
    if (this.address.mobile.trim() == '' || this.address.mobile == null) {
      return;

    }
    if (this.address.alternateMobile.trim() == '' || this.address.alternateMobile == null) {
      return;

    }
    if (this.address.city.trim() == '' || this.address.city == null) {
      return;

    }
    if (this.address.landMark.trim() == '' || this.address.landMark == null) {
      return;

    }
    if (this.address.locality.trim() == '' || this.address.locality == null) {
      return;

    }
    if (this.address.addressType.trim() == '' || this.address.addressType == null) {
      return;

    }
    if (this.address.state.trim() == '' || this.address.state == null) {
      return;

    }
    this.addressservice.addAddress(this.address).subscribe({
      next: (data: any) => {
        console.log(data);
        this.post.showSuccess('Succesfully added','Success')
      },
      error: (er: any) => {
        this.post.showerror('Error Added','Error')
      }
    })

  }
}
