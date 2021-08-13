import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`<app-get-product-by-id></app-get-product-by-id> `
})
export class AppComponent {
  title = 'frontend';
  
  navbarCollapsed = true;

  

}

