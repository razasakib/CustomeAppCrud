import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './component/customer-details/customer-details.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { CreateCustomerComponent } from './component/create-customer/create-customer.component';
//for httpClient
import { HttpClientModule } from '@angular/common/http';
//for ng 
import { FormsModule } from '@angular/forms';
//service class
import { CustomerServiceService } from './appService/customer-service.service';
import { HeaderComponent } from './component/header/header.component';
import { AppRoutingModule } from './app-routing.module';
//1.pupup modals
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    //2.pupup modals
    ModalModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [CustomerServiceService],
  bootstrap: [ AppComponent]
})
export class AppModule { }
