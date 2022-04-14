import { Inject, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CookieService } from '../services/cookie.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setIsLoggedIn, setUser } from '../../app.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  template: `
  <div class="auth-wrapper">
    <div class="auth">
        <app-auth-register
          *ngIf="isRegister"
          [isLoading]="isLoading"
          (onSubmitAction)="handleOnSubmit($event)"></app-auth-register>
        <app-auth-login
          *ngIf="isLogin"
          [isLoading]="isLoading"
          [isSuccess]="isSuccess"
          (onSubmitAction)="handleOnSubmit($event)"></app-auth-login>
      </div>

  </div>

`,
  styles: [`
  .auth-wrapper {
    display: flex;
    width: 100%;
    flex-direction: row;
    min-height: 100%;
    background: #fdfdfd;
    align-items: center;
    /* #F4B400 */
  }
  .auth {
      flex-direction: column;
      flex-grow: 1;
      align-content: center;
    }
  
  
  `]
})

export class AuthComponent implements OnInit {
  isSuccess = false;
  isLoading = false;
  isLogin = false;
  isRegister  = false;
  isForgotPassword = false;
  isResetPassword = false;
  isActivateAccount = false;
  token = null;
  
  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<object>,
    private _snackBar: MatSnackBar
  ) {
    route.params.subscribe(params => {
      this.token = params['token'];
      this.isLogin = params['action'] == 'signin' || !params['action'];
      this.isRegister = params['action'] == 'signup';
      
    })
  }

  ngOnInit(): void {
    
  }

  openSnackBar(data: string)
  {
     this._snackBar.openFromComponent(ErrorSnackBarComponent, {
       duration: 5000,
       data,
       panelClass: ['danger'],
       verticalPosition: 'top'
     })
  }

  handleOnSubmit(event: any): void {
    this.isLoading = true;

    switch(event.action) {
      case 'signin':
        this.signin(event.data);
        break;
      case 'signup':
        this.signup(event.data);
        break;
      default:;
    }
  }

  signin(data: any) {
    console.log({data})
    
    this.authService.signin(data)
    .subscribe({
        next: (res: any) => {
        this.cookieService.set('token', res.token)
        this.store.dispatch(setIsLoggedIn({ isLoggedIn: true }))

        // dispatch action to trigger side effect
/*
        this.authService.me({token: res.token})
          .subscribe(
            (res: any) => {
              const { user } = res;
              this.store.dispatch(setUser({ user }))
            }
          )
*/      
        this.router.navigate(['/dashboard']);
        this.isLoading = false;
        
      },
      error: (err: any) => {
      this.isLoading = false;
      switch(err.status) {
        case 401:
          this.openSnackBar('Oops! Wrong Username/Password.');
        break;
        default:;
      }
    }
    });
  
    
  }

  signup(data: any) {
    data['type'] = +data['type'];

    this.authService.signup(data)
      .subscribe({
        next: (res: any) => {
          this.cookieService.set('token', res.token)
          this.router.navigate(['/dashboard/profile']);
          this.isLoading = false;
        },
        error: (err: any) => {
          this.isLoading = false;
          switch(err.status) {
            case 406:
              this.openSnackBar('Oops! This E-mail is no longer available.');
            break;
            default:;
          }
         
        }
      });
    
  }

  
}

@Component({
  selector: 'app-err-snack-bar',
  template: `<span class="danger">{{data}}</span>`,
  styles: [`
  `]
})
export class ErrorSnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string){}
} 
