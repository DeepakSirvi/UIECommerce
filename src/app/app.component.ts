import { Component, OnInit } from '@angular/core';
import { JavaScriptloaderService } from './java-scriptloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'ECommerce';
   constructor (private loader:JavaScriptloaderService ){
   }

  public role:string=""; 
  public currentPanel:string="";

  ngOnInit(): void {
    this.loader.ScriptLoader("main.js")
  }
   
  switchPanel(role:string){
    this.role=role;
    if(this.role==="ADMIN"){
      this.currentPanel="ADMIN"
    }
    else if(this.role==="CUSTOMER"){
      this.currentPanel="CUSTOMER"
    }

  }
}
