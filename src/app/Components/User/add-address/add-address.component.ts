import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/Model/address';
import { AddressService } from 'src/app/Service/AuthService/address.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  address: Address = new Address()
  constructor(private addressservice: AddressService) { }


  ngOnInit(): void { }

  public AddAddress() {
    this.addressservice.addAddress(this.address).subscribe({
      next: (data: any) => {
        console.log(data);
        Swal.fire('Success','Add Address Succesfully','success');
      },
      error: (er: any) => {
        Swal.fire('Error',' Add Address error','error');
      }
    })

  }
}
