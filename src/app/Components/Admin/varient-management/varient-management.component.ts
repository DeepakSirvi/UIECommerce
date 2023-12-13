import { Component } from '@angular/core';
import { VarientCategory } from 'src/app/Model/varient-category';
import { VarientService } from 'src/app/Service/varient.service';

@Component({
  selector: 'app-varient-management',
  templateUrl: './varient-management.component.html',
  styleUrls: ['./varient-management.component.css']
})
export class VarientManagementComponent {
  ngOnInit(): void {
    this.getVarient();
  }

  constructor(private varientService:VarientService){}
  
  varient:VarientCategory[]=[];

  getVarient() {
    this.varientService.getCategories().subscribe((result:any)=>{
     this.varient = result.AllVarientCategory;
    })
  }
}
