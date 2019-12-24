import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Product } from './product';
import { Family } from './family';
import { Location } from './location';
import { Transaction } from './transaction';
import { Response } from '@angular/http';

@Component({
    selector: "http",
    templateUrl: "app/components/http/http.component.html",
    styleUrls: ['app/components/http/http.component.css']
})

export class HttpComponent{
  private products : Product[] = []; 
  private families : Family[] = [];
  private locations : Location[] = [];
  private transactions : Transaction[] = [];
  
  private productsObservable : Observable<Product[]>; 

  constructor(private dataService: DataService){
    
    this.productsObservable = this.dataService.get_products();
    
    this.dataService.get_families().subscribe((res : Family[])=>{
      this.families = res;
    });
    this.dataService.get_locations().subscribe((res : Location[])=>{
      this.locations = res;
    });
    this.dataService.get_transactions().subscribe((res : Transaction[])=>{
      this.transactions = res;
    });    
  }
}