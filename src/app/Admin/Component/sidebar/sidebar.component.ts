import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
 
}




toggleSideNav(temp:any){
  if(temp.style.display==='none')
  temp.style.display='block';
else
temp.style.display='none';
   
}


   

}