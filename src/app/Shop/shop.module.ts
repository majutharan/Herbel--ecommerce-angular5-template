import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertModule, BsDropdownModule, ModalModule} from 'ngx-bootstrap';

import {CollapseModule} from 'ngx-bootstrap/collapse';
import {CommonModule} from '@angular/common';
import {ShopComponent} from './shop.component';
import {ShopRouting} from './shop.routing';



@NgModule({
  imports: [

    CollapseModule.forRoot(),
    FormsModule,
    CommonModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    ShopRouting

  ],
  declarations: [
    ShopComponent
  ],
  providers: [],
  bootstrap: [ShopComponent]
})

export class ShopModule {
}

