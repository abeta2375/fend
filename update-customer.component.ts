import { Component } from '@angular/core';
import { Customer } from '../../Customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent {

  customer: Customer = new Customer();
  submitted: boolean = false;

  constructor(private service: CustomerService){  }

  onSubmit(){
    this.service.updateCustomer(this.customer.customerCode, this.customer).subscribe(
      date=>{
        this.submitted = true;
      },
      error => {
        console.error(error);
      }
    );
  }

}
