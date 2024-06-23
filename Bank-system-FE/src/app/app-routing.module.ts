import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path:'',redirectTo:'bank',pathMatch:'full'},
  {path:'bank', component:TabMenuComponent, children:[
    {path:'',redirectTo:'customer',pathMatch:'full'},
    {path:'create',component:CreateCustomerComponent},
    {path:'customer',component:CustomerComponent},
    {path:'transaction',component:TransactionComponent}
  ]},


]
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
