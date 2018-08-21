import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        loadChildren: './Home/home.module#HomeModule'
      },
      {
        path: 'herbList',
        loadChildren: './HerbList/herbList.module#HerbListModule'
      },
      {
        path: 'shop',
        loadChildren: './Shop/shop.module#ShopModule'
      },
      {
        path: 'health',
        loadChildren: './Health/health.module#HealthModule'
      },
      {
        path: 'support',
        loadChildren: './Support/support.module#SupportModule'
      },
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
