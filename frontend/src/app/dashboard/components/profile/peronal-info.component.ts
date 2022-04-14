import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {  Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard-personal-info',
  template: `
  <div class="personal-info">
    <div class="form">
        <form [formGroup]="personalForm" (ngSubmit)="onSubmit()">
          <div class="form-row">
            <div>
              <mat-form-field appearance="outline">
               <mat-label>First Name</mat-label>
               <input matInput placeholder="Placeholder" formControlName="firstName" >
              </mat-form-field>
            </div>
            <div>
              <mat-form-field appearance="outline">
                 <mat-label>Last Name</mat-label>
                 <input matInput placeholder="Placeholder" formControlName="lastName" >
                </mat-form-field>
            </div>
          </div>
           <div class="form-row">
            <div>
              <mat-form-field appearance="outline">
                <mat-label>Gender</mat-label>
                <input matInput placeholder="Placeholder" formControlName="gender" >
              </mat-form-field>
            </div>
            <div>
              <mat-form-field appearance="fill">
                <mat-label>Date of Birth</mat-label>
                <input matInput [matDatepicker]="picker" formControlName="dob">
                <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
                <mat-datepicker #picker></mat-datepicker>
              </mat-form-field>
            </div>
          </div>
          <div class="form-row">
            <div>
              <mat-form-field appearance="outline">
                <mat-label>Phone</mat-label>
                <input matInput placeholder="Placeholder" formControlName="phone" >
              </mat-form-field>
            </div>
            <div>
              <mat-form-field appearance="outline">
                  <mat-label>Occupation</mat-label>
                  <input matInput placeholder="Placeholder" formControlName="occupation" >
               </mat-form-field>
            </div>
          </div>
          <div class="form-row">
            <div>
              <mat-form-field appearance="outline">
                <mat-label>Country</mat-label>
                <input matInput placeholder="Placeholder" formControlName="country" >
              </mat-form-field>
            </div>
            <div>
              <button
              [disabled]="_isLoading"
                  type="submit"
                  mat-raised-button
                  class="blab-btn-primary">
                    <mat-spinner
                    *ngIf="_isLoading"
                    [diameter]="20"></mat-spinner>
                    <span
                    *ngIf="!_isLoading">Update</span></button>
            </div>
          </div>
          
        </form>
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
export class PersonalInfoComponent implements OnInit {
  @Input() user: any = {};
  @Output() onAction = new EventEmitter<any>();
  _isLoading: boolean = false;

  @Input() set isLoading(val : boolean)
  {
    this._isLoading = val;
  }

  get isLoading()
  {
    return this._isLoading;
  }
  

  personalForm = new FormGroup({
    ID: new FormControl(0),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl(''),
    phone: new FormControl(''),
    occupation: new FormControl(''),
    country: new FormControl('')
  });

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.personalForm.patchValue(this.user);
  }

  onSubmit()
  {
     this.onAction.emit(this.personalForm.value);
  }
}
