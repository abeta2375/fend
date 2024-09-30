import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  clist: Customer[]=[];

  constructor(private http: HttpClient) { }

  getAllCustomer(): Observable<Customer[]>{
    return this.http.get<Customer[]>('http://localhost:8081/customer/all');
  }

  deleteCustomer(customerCode: number): void {
    this.http.delete('http://localhost:8081/customer/delete/'+customerCode);
  }

  addCustomer(customer: Customer) {
    return this.http.post('http://localhost:8081/customer/add', customer);
  }

  getCustomer(customerCode: number): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:8081/customer/id/' + customerCode);
  }

  updateCustomer(customerCode: number, customer: Customer): Observable<any> {
    return this.http.put('http://localhost:8081/customer/update/' + customerCode, customer);
  }
}
