import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-register',
  template: `
      <mat-card class="register-card">
        <div class="title">
          <div><h1>Sign Up</h1></div>
          
        </div>
        
        <div class="inner-card">
          <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">

            <p>
                <mat-label>Account Type: </mat-label>
                <mat-radio-group aria-label="Select an option" formControlName="type">
                  <mat-radio-button value="1">Personal</mat-radio-button>
                  <mat-radio-button value="2">Business</mat-radio-button>
                </mat-radio-group>
                <br />
                <br />
            </p>
            <p>
              <mat-form-field appearance="fill">
                <mat-label>E-mail</mat-label>
                <input type="email" matInput placeholder="Placeholder" formControlName="email" required email>
              </mat-form-field>
            </p>

            <p>
              <mat-form-field appearance="fill">
                <mat-label>Password</mat-label>
                <input matInput type="password" placeholder="Placeholder" [type]="hide ? 'password' : 'text'" formControlName="password" required>
                <button class="visble-password-icon" type="button" mat-icon-button matSuffix (click)="togglePassword()" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
                  <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
                </button>
              </mat-form-field>
            </p>

            <p>
              By registering, you agree to our <a routerLink="">Terms for use</a> and <a routerLink="">Privacy Policy</a>.
            </p>
            <p>
              <button class="form-button" mat-button color="primary" type="submit" [disabled]="!registerForm.valid || _isLoading">
                <mat-spinner
                  *ngIf="_isLoading"
                  [diameter]="20"></mat-spinner>
                  <span
                  *ngIf="!_isLoading">Sign Up</span>
              </button>
              
            </p>
          </form>
          <p>
          
            Already have an account? <a routerLink="/auth/signin">Sign In</a>
          </p>
        </div>
      </mat-card>
`
})

export class RegisterComponent {
  @Output() onSubmitAction = new EventEmitter<any>();
  _isLoading: boolean = false;
  _isSuccess: boolean  = false;

  @Input() set isLoading(val : boolean)
  {
    this._isLoading = val;
  }

  get isLoading()
  {
    return this._isLoading;
  }
  

  hide = true;

  registerForm = new FormGroup({
    password: new FormControl(''),
    email: new FormControl(''),
    type: new FormControl('1')
  });

  constructor() {}

  togglePassword()
  {
    this.hide = !this.hide;
  }

  onSubmit(): void {
    this.onSubmitAction.emit({action: 'signup', data: this.registerForm.value});
  }
}
