import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './component/create-customer/create-customer.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './component/customer-details/customer-details.component';

const routes: Routes = [
  {path:'',redirectTo:'create',pathMatch:'full'},
  { path: 'create', component: CreateCustomerComponent },
  
  { path: 'list', component: CustomerListComponent },
  { path: 'details/:id', component: CustomerDetailsComponent },
  //{ path: 'oneData/:customerData', component: CustomerListComponent },
]
@NgModule({
 
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
