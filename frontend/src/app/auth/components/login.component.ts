import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CookieService } from '../services/cookie.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setIsLoggedIn } from '../../app.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
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
  
  @Input() set isSuccess(val : boolean)
  {
    this._isSuccess = val;
  }

  get isSuccess()
  {
    return this._isSuccess;
  }

  authForm = new FormGroup({
    accountId: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl(true)
  });

  constructor() {}

  onSubmit(): void {
    this.onSubmitAction.emit({action: 'signin', data: this.authForm.value});
  }
}
