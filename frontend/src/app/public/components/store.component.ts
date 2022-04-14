import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-public-home',
  template: `
    <div>Store</div>
  `,
  styles: [`
  
  `]
})
export class StoreComponent implements OnInit {
  notificationsCount = 1;
  notificationsState = 'active'; // [ none, active]
  public mode: any = 'over';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    // call api to delete session
    this.router.navigate(['/auth/login']);
  }

}
