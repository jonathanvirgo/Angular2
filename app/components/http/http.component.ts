import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Product } from './product';
import { Family } from './family';
import { Location } from './location';
import { Transaction } from './transaction';
import { Response } from '@angular/http';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: "http",
    templateUrl: "app/components/http/http.component.html",
    styleUrls: ['app/components/http/http.component.css']
})

export class HttpComponent implements OnInit{
  chon: Product;
  // id: number;
  private products : Product[] = []; 
  private families : Family[] = [];
  private locations : Location[] = [];
  private transactions : Transaction[] = [];
  
  myform: FormGroup;
  
  private productsObservable : Observable<Product[]>; 

  constructor(private dataService: DataService, private fb: FormBuilder){
    
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
  ngOnInit(){
    this.khoi_tao_form();
  }
  khoi_tao_form(){
    this.myform = this.fb.group({
      name:['',Validators.required],
      gia:[null,Validators.required],
      sl:[null,Validators.required]
    })
  }
  chinh_sua_form(){
    console.log("abc");
    this.dataService.update(this.chon.id, this.chon).subscribe(s =>{
      if(s){
        console.log("ABC");
      }
    })
  }
  cap_nhat(evt: any){
    console.log("A",evt);
    this.chon = evt;
    this.myform.patchValue({
      name : evt.name,
      gia : evt.cost,
      sl : evt.quantity
      })
  }

}