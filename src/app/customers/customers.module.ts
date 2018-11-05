import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClient, HttpHandler } from '@angular/common/http';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent
  ]
})
export class CustomersModule { }
