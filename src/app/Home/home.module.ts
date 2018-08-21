import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertModule, BsDropdownModule, ModalModule} from 'ngx-bootstrap';

import {CollapseModule} from 'ngx-bootstrap/collapse';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRouting} from './home.routing';



@NgModule({
  imports: [

    CollapseModule.forRoot(),
    FormsModule,
    CommonModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    HomeRouting,


  ],
  declarations: [
    HomeComponent
  ],
  providers: [],
  bootstrap: [HomeComponent]
})

export class HomeModule {
}

