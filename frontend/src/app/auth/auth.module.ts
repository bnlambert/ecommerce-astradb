import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatInput } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

import {
  AuthComponent,
  LoginComponent,
  RegisterComponent
} from './components';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule    
  ]
})
export class AuthModule { }
