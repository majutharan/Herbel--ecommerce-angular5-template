import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HealthComponent} from './health.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Health'
    },
    component: HealthComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HealthRouting {
}
