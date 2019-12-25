import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable()
export class DataService {
  baseUrl:string = "http://localhost:3001";
  prourl = 'http://localhost:3001/products';
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
  update(id:number, data: any):Observable<any>{
    return this.httpClient.put(this.prourl+id, data).map((res: Response) =>{
      res.json();
    })
  }
  
}


