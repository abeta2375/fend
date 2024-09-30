import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { GetSingleCustomerComponent } from './components/get-single-customer/get-single-customer.component';

const routes: Routes = [
  { path:'getAllCustomer', component:ListCustomerComponent },
  { path:'addCustomer', component:AddCustomerComponent },
  { path:'updateCustomer', component:UpdateCustomerComponent},
  { path:'getSingleCustomer', component:GetSingleCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
