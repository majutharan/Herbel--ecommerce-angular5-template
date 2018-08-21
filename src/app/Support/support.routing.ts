import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SupportComponent} from './support.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Support'
    },
    component: SupportComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SupportRouting {
}
