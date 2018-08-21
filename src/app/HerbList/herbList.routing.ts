import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HerbListComponent} from './herbList.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'HerbList'
    },
    component: HerbListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HerbListRouting {
}
