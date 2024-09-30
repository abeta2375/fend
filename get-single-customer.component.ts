import { Component } from '@angular/core';
import { Customer } from '../../Customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-get-single-customer',
  templateUrl: './get-single-customer.component.html',
  styleUrl: './get-single-customer.component.css'
})
export class GetSingleCustomerComponent {
  customer !: Customer;
  customerCode !: number;

  constructor(private service: CustomerService){ }

  onSubmit(){
    this.service.getCustomer(this.customerCode).subscribe(
      data => {
        this.customer = data;
      },
      error => {
        console.error(error);
      }
    );
  }

}
