import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AuthModule } from '../auth/auth.module';
import { DealComponent, DonateComponent, HomeComponent, SearchComponent, StoreComponent } from './components';
import { PublicLayoutComponent } from './public-layout.component';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    DealComponent,
    DonateComponent,
    SearchComponent,
    StoreComponent,
    PublicLayoutComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
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
export class PublicModule { }
