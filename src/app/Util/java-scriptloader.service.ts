import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JavaScriptloaderService {
  private renderer: Renderer2;
  constructor(
    private rendererFactory: RendererFactory2,
    private router: Router
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  loadScript(src: string): void {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    this.renderer.appendChild(document.body, script);
  }

  ScriptLoader(path:string): void {
    console.log("hello");
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadScript('/assets/js/'+path); // Update the path as needed
      }
    });
  }
  
}
