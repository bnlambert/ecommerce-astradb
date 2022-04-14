import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';


import {
  ProductComponent,
  ProductListComponent,
  ProductFormComponent,
  //ProductDetailComponent,
} from './components/product';
import {
  CategoryComponent,
  CategoryListComponent,
  CategoryFormComponent,
  //CategoryDetailComponent,
} from './components/category';
import { ProductLayoutComponent } from './product-layout.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductLayoutComponent,
    CategoryComponent,
    CategoryListComponent,
    CategoryFormComponent,
    //CategoryDetailComponent,
    ProductComponent,
    ProductListComponent,
    ProductFormComponent,
    //ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
  ]
})
export class ProductModule { }
