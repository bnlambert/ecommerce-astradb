import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CookieService } from '../auth/services/cookie.service'
@Component({
  selector: 'app-product-layout',
  template: `
    <div>
       <div>
         <span>
          <a routerLink='/products'>Products</a>
         </span>
         <span>
          <a routerLink='/products/categories'>Categories</a>
         </span>
       </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ['']
})
export class ProductLayoutComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }


}
