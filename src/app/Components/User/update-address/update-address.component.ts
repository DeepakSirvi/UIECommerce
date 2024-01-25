import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/Model/address';
import { AddressService } from 'src/app/Service/AuthService/address.service';
import Toast from 'src/app/Util/helper';
@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent  implements OnInit{
  address :Address =new Address();
  id: any;
  

 
  constructor( private _address:AddressService,private route: ActivatedRoute){}
  
  ngOnInit(): void {
   
    this.route.params.subscribe((params)=>{
      this.address.id=params['id']
      this.findDetailsById(this.address.id)

    })
  
  }
 
  findDetailsById(id:any)
  {
    this._address.getAddressId(id).subscribe({
      next:(data:any)=>{
        this.address = data
      },
      error:(error:any)=>{
        console.log(error);
        

      }
    })
  }

  updateAddress(){

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
    this._address.updateAddress(this.id,this.address).subscribe({
  next:(data:any)=>{
console.log(data);
// Toast.mixin({
//   toast:true,
//   position:'top-right',
//   timer:5000,
//   timerProgressBar:true
// })
Toast.fire({
  icon:'success',
  text:'Update Address Succesfully'
})
// Swal.fire('Success', ' Update Address Succesfully', 'success');

  },
  error:(er:any)=>{

  }
}); 
}
}


