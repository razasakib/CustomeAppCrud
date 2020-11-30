import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/appService/customer-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  id: number;
  customer: any;

  constructor(private route: ActivatedRoute,private router: Router,
    private customerService: CustomerServiceService) { }

 
 


 

  ngOnInit() {
    
    this.oneRecordsFetch();
    
  }

oneRecordsFetch(){
  this.customer=new Customer();
  this.id = this.route.snapshot.params['id'];
  this.customerService.getOneRecordsFromDb(this.id)
  .subscribe(data=>{
    console.log(data)
    this.customer=data;
  },error=>console.log(error)
  )
}
  

  list(){
    console.log("hi");
    this.router.navigate(['list']);
  }

}
