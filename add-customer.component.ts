import { Component } from '@angular/core';
import { Customer } from '../../Customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  customer: Customer = new Customer();
  submitted: boolean = false;

  constructor(private service: CustomerService){ }

  onSubmit(){
    this.service.addCustomer(this.customer).subscribe(
      data => {
        this.submitted = true;
      },
      error => {
        console.error(error);
      }
    );
  }

}
