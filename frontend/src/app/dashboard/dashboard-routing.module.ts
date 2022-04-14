import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/utils/auth.guard';
import { ProfileComponent } from './components/profile';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
   component: DashboardLayoutComponent,
   canActivate: [AuthGuard],
   children: [
     {
       path: '',
       component: DashboardComponent
     },
     {
       path: 'profile',
       component: ProfileComponent
     },
     {
      path: 'products',
      loadChildren: () => import('../product/product.module').then(m => m.ProductModule)
    }
     
   ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
