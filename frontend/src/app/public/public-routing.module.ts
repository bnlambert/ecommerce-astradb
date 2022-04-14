import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealComponent, DonateComponent, HomeComponent, SearchComponent, StoreComponent } from './components';
import { PublicLayoutComponent } from './public-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'stores',
        component: StoreComponent
      },
      {
        path: 'deals',
        component: DealComponent
      },
      {
        path: 'donate',
        component: DonateComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
