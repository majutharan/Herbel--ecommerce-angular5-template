import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertModule, BsDropdownModule, ModalModule} from 'ngx-bootstrap';

import {CollapseModule} from 'ngx-bootstrap/collapse';
import {CommonModule} from '@angular/common';
import {HealthComponent} from './health.component';
import {HealthRouting} from './health.routing';



@NgModule({
  imports: [

    CollapseModule.forRoot(),
    FormsModule,
    CommonModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    HealthRouting

  ],
  declarations: [
    HealthComponent
  ],
  providers: [],
  bootstrap: [HealthComponent]
})

export class HealthModule {
}

