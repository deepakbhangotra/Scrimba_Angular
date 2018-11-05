import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/data.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title: string;
  people: ICustomer[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = 'Customers';
    this.dataService.getCustomers()
      .subscribe((customers: ICustomer[]) => this.people = customers);
  }

}
