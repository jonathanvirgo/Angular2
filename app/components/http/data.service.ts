import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  baseUrl:string = "http://localhost:3001";
  
  constructor(private httpClient : Http) { 
    
  }
  
  get_products(){
    return this.httpClient.get(this.baseUrl + '/products')
    .map((respone : Response) => {
      console.log("respone", respone);
      return respone.json();
    });
  }
  get_families(){
    return this.httpClient.get(this.baseUrl + '/families')
    .map((respone : Response) => {
      return respone.json();
    });
  }
  get_locations(){
    return this.httpClient.get(this.baseUrl + '/locations')
    .map((respone : Response) => {
      return respone.json();
    });
  }
  get_transactions(){
    return this.httpClient.get(this.baseUrl + '/families')
    .map((respone : Response) => {
      return respone.json();
    });
  }

}
