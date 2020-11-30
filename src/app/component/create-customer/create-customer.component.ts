import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerServiceService } from 'src/app/appService/customer-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer:Customer= new Customer();
  message:any;

  constructor(private customerService:CustomerServiceService,private router:Router ) { } 
 
  ngOnInit(): void {
  }

  //call service component
  registerShow(){
        let resp=this.customerService.registerCustomer(this.customer);
        resp.subscribe((data)=>this.message=data);
  }

  onSubmit(){
    this.registerShow();
    this.router.navigate(['list']);
    // console.log(this.customer);
      // console.log(this.message);
  }
  
}
