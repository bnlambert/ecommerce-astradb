import { Component, OnInit, Inject } from '@angular/core';
import {  Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

import { ProfileService } from '../../services/profile.service';
import { setUser } from '../../../app.actions';
import { AppState } from '../../../app.reducer';

@Component({
  selector: 'app-dashboard-profile',
  template: `
  <div class="profile">
    <h2>Profile</h2>
    
    <mat-accordion>
      <mat-expansion-panel hideToggle>
        <mat-expansion-panel-header>
          <mat-panel-title>
            Personal Information
          </mat-panel-title>
          <mat-panel-description>
            
          </mat-panel-description>
        </mat-expansion-panel-header>
          <app-dashboard-personal-info
            *ngIf="user.ID > 0"
            [user]="user"
            [isLoading]="isLoading"
            (onAction)="handleOnAction($event)"></app-dashboard-personal-info>
      </mat-expansion-panel>
      <!-- <mat-expansion-panel (opened)="panelOpenState = true"
                           (closed)="panelOpenState = false">
        <mat-expansion-panel-header>
          <mat-panel-title>
            Self aware panel
          </mat-panel-title>
          <mat-panel-description>
            Currently I am {{panelOpenState ? 'open' : 'closed'}}
          </mat-panel-description>
        </mat-expansion-panel-header>
        <p>I'm visible because I am open</p>
      </mat-expansion-panel> -->
    </mat-accordion>
    
  </div>
  `,
  styles: [`
    .profile {
       padding: 20px;
       background-color: #ffffff;
       display: block;
       overlow: none;
       height: 100%;
    }
    .profile-steps {
      display: block;
      width: 100%;
      clear: both;
    }
    .profile-steps div {
      width: 100%;
      max-width: 550px;
      text-align: center;
      font-size: 24px;
      padding: 20px;
      border: solid 1px #17A2B8;
    }
    .profile-steps div:first-child {
      margin-bottom: 20px;
    }
  `]
})
export class ProfileComponent implements OnInit {
  panelOpenState = false;
  user: any =  {};
  isLoading = false;

  constructor(
    private router: Router,
    private profileService:  ProfileService,
    private store: Store<{app: AppState}>,
    private _snackBar: MatSnackBar
  ) { 
    
    const app$  = this.store.select('app');
    app$.subscribe(
      res => {
        this.user = res.user;
      }
    )
    
  }

  ngOnInit(): void {
    
  }

  openSnackBar(data: string, type='success')
  {
     this._snackBar.openFromComponent(FeedbackSnackBarComponent, {
       duration: 5000,
       data,
       panelClass: [type],
       verticalPosition: 'top'
     })
  }


  handleOnAction(event: any) {
     this.isLoading = true;
     this.profileService.updatePersonalInfo(event)
      .subscribe(
        res => {
          this.store.dispatch(setUser({user: res.user}));
          this.isLoading = false;
          this.openSnackBar('Operation Completed Successfully.');
        },
        err => {
          this.isLoading = false;
          this.openSnackBar('Oops! Wrong Username/Password.', 'danger');
        }
      )
     console.log({event})
  }
}

@Component({
  selector: 'app-dashboard-feedback-snack-bar',
  template: `<span>{{data}}</span>`,
  styles: [`
  `]
})
export class FeedbackSnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string){}
} 
