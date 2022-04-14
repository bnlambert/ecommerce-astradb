import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CookieService } from '../auth/services/cookie.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  notificationsCount = 1;
  notificationsState = 'active'; // [ none, active]
  public mode: any = 'over';

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
