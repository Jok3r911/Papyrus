import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mainproject';

  onActivate(event: any) {
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
  }
  constructor(private router:Router){}

  gotoPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
