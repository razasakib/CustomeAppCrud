import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
//http://localhost:9898/springboot-crud-rest/customer/all
getRecordsByIdurls="http://localhost:9898/springboot-crud-rest/customer/one";
removeDataUrl="http://localhost:9898/springboot-crud-rest/customer/remove";
updateDataUrl= "http://localhost:9898/springboot-crud-rest/customer/update";
//let proxyurl="https://cors-anywhere.herokuapp.com/";
  constructor(private http:HttpClient) { }
 //send to data to database 
  public registerCustomer(customer){
    return this.http.post("http://localhost:9898/springboot-crud-rest/customer/save",customer,{responseType:'text' as 'json'});
  }

  //retrive data from database using get
  public getAllRecordsFromDb(){
    return this.http.get("http://localhost:9898/springboot-crud-rest/customer/all");
  }

  //retrive data from database using get
  public getOneRecordsFromDb(customer_id,){
    return this.http.get(`${this.getRecordsByIdurls}/${customer_id}`);
   // return this.http.get(""+customer_id);
  }

  //delete data
  public deleteRecordsFromDb(customer_id){
    return this.http.delete(`${this.removeDataUrl}/${customer_id}`);
  }

  

  //update
 public updateRecordsFromDb(customer:Customer ){
    return this.http.put(`${this.updateDataUrl}`,customer,{responseType:'text' as 'json'});
  }
 /* updateRecordsFromDb(student:Student):Observable<Message>{
    return this.http.put<Message>(`${this.baseUrl}/update`,student);
   */
}
