import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertModule, BsDropdownModule, ModalModule} from 'ngx-bootstrap';

import {CollapseModule} from 'ngx-bootstrap/collapse';
import {CommonModule} from '@angular/common';
import {HerbListComponent} from './herbList.component';
import {HerbListRouting} from './herbList.routing';


@NgModule({
  imports: [

    CollapseModule.forRoot(),
    FormsModule,
    CommonModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    HerbListRouting

  ],
  declarations: [
    HerbListComponent
  ],
  providers: [],
  bootstrap: [HerbListComponent]
})

export class HerbListModule {
}

