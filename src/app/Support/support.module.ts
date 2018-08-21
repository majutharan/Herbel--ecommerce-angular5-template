import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertModule, BsDropdownModule, ModalModule} from 'ngx-bootstrap';

import {CollapseModule} from 'ngx-bootstrap/collapse';
import {CommonModule} from '@angular/common';
import {SupportComponent} from './support.component';
import {SupportRouting} from './support.routing';


@NgModule({
  imports: [

    CollapseModule.forRoot(),
    FormsModule,
    CommonModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    SupportRouting

  ],
  declarations: [
    SupportComponent
  ],
  providers: [],
  bootstrap: [SupportComponent]
})

export class SupportModule {
}

