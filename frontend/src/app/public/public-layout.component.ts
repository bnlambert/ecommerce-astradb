import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CookieService } from '../auth/services/cookie.service'
@Component({
  selector: 'app-public',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {
  notificationsCount = 1;
  notificationsState = 'active'; // [ none, active]
  public mode: any = 'over';
  menuItems = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/stores',
      name: 'Stores'
    },
    {
      path: '/deals',
      name: 'Deals'
    },
    {
      path: '/donate',
      name: 'Donate'
    }
  ]

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    // call api to delete session
    this.cookieService.remove('token')
    this.router.navigate(['/auth/login']);
  }

}
