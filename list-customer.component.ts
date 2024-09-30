import { Component } from '@angular/core';
import { Customer } from '../../Customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrl: './list-customer.component.css'
})
export class ListCustomerComponent {

  clist !: Customer[];

  constructor(private service: CustomerService){ 
    this.service.getAllCustomer().subscribe(
      data => {
        this.clist = data;
      });
  }

  deleteCustomer(customerCode: number){
      this.clist = this.clist.filter(item => item.customerCode !== customerCode);
      this.service.deleteCustomer(customerCode);
  }

}
