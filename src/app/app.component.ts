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
  ngOnInit(): void {
    this.loader.ScriptLoader("main.js")
  }
   
}
