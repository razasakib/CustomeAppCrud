import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { Observable } from "rxjs";
import { CustomerServiceService } from 'src/app/appService/customer-service.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
/*update*/ 
updateData:any;


 modalRef: BsModalRef;
 customer:any;
 public customers:any=Customer;
  constructor(private customerService:CustomerServiceService,
    private modalService:BsModalService,
    private router: Router) { }

  ngOnInit(): void {
  //  console.log(this.customer);
  this.fetchAllData();
  //console.log(this.customer);
  
  }

 //fetchData
 fetchAllData(){
   let resp=this.customerService.getAllRecordsFromDb();
   resp.subscribe((data)=>this.customer=data);
 }



 deleteCustomerData(customerId:number){
      let resp=this.customerService.deleteRecordsFromDb(customerId);
      resp.subscribe((data)=>{this.customers=data});
      if(confirm('do you really want to delete'))
      this.fetchAllData();
  }

  customerDetails(id:number){  
    this.router.navigate(['details', id]);
   
   /* let resp=this.customerService.getOneRecordsFromDb(customerId);
    resp.subscribe((data)=>{this.customers=data});
   
    
    
    console.log(this.customer);
      this.fetchAllData();*/
  }


  customerDetailsByModal(id:number,form){
    let resp=this.customerService.getOneRecordsFromDb(id);
    resp.subscribe((data)=>{this.customers=data});
   
    this.modalRef=this.modalService.show(form);
    
    console.log(this.customer);
      this.fetchAllData();
  }

//edit
  editCustomer(id:number,updateForm:any){
    this.modalRef=this.modalService.show(updateForm);
    this.customerDetailsByModal(id,updateForm);
     console.log(id);
  }

  //update
  onUpdate(){
   let resp=this.customerService.registerCustomer(this.customers);
    resp.subscribe((data)=>{
      console.log(data)
      this.updateData=data,
      this.router.navigate(['/list']);

    });
 /*  let resp=this.customerService.updateRecordsFromDb(this.id,this.updateCustomer);
    resp.subscribe(data=>{
      console.log(data)
      this.updateCustomer=new this.customer;
    })
/*
    this.service.updateStudent(this.student).subscribe(data=>{
 console.log(data),
 this.router.navigate(['/all']);*/
  }


  
}
