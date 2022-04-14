import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './components/product';
import { CategoryComponent } from './components/category';
import { ProductLayoutComponent } from './product-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ProductLayoutComponent,
    children: [
      {
        path: '',
        component: ProductComponent
      },
      {
        path: 'categories',
        component: CategoryComponent
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
