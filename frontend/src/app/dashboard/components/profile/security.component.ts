import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-security',
  template: `
  <div class="welcome">
    <h2>Welcome</h2>
    <p>
      We are excited to have you on board.
    </p>
    <div class="welcome-steps">
       <div (click)="handleClick('profile')">Please tell us more about yourself
         <mat-icon aria-hidden="false" aria-label="Example home icon">arrow_forward</mat-icon></div>
       <div (click)="handleClick('verify')">Take your account verification to the next level 
          <mat-icon aria-hidden="false" aria-label="Example home icon">arrow_forward</mat-icon></div>
    </div>
  </div>
  `,
  styles: [`
    .welcome {
       padding: 20px;
       background-color: #ffffff;
       display: block;
       overlow: none;
       height: 100%;
    }
    .welcome-steps {
      display: block;
      width: 100%;
      clear: both;
    }
    .welcome-steps div {
      width: 100%;
      max-width: 550px;
      text-align: center;
      font-size: 24px;
      padding: 20px;
      border: solid 1px #17A2B8;
    }
    .welcome-steps div:first-child {
      margin-bottom: 20px;
    }
  `]
})
export class SecurityComponent implements OnInit {
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleClick(path: string) {
     const url = path == 'profile' ? '/profile' : '/verify';
     this.router.navigate([url]); 
  }
}
