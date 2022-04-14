import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './dashboard.component';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { FeedbackSnackBarComponent } from './components/profile/profile.component'
import { WelcomeComponent } from './components/welcome.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProductModule } from '../product/product.module';
import { StoreModule } from '../store/store.module';
import { PersonalInfoComponent, SecurityComponent, ProfileComponent} from './components/profile';


@NgModule({
  declarations: [
    PersonalInfoComponent,
    SecurityComponent,
    ProfileComponent,
    FeedbackSnackBarComponent,
    WelcomeComponent,
    DashboardComponent,
    DashboardLayoutComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ProductModule,
    StoreModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ]
})
export class DashboardModule { }
