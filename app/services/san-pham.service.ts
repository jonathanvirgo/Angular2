import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';

interface Product{
    id: string,
    name: string,
    description: string
  }

@Injectable()

export class SanphamService {
    private sanpham: Product[];
    constructor(){
         this.sanpham= [
            {
              id: "ABC8441189035",
              name: "Áo",
              description: "Áo phông chữ T, Made in Việt nam"
            },
            {
              id: "DEF6510463347",
              name: "Giầy",
              description: "Giầy da, Made in Việt nam"
            },
            {
              id: "GHI0831819467",
              name: "Túi",
              description: "Túi xách, Made in Việt nam"
            }
          ];
    }

    getsanpham(): Observable<Product[]>{
        return of(this.sanpham);
      }
    
     getchitiet(id: string): Observable<Product>{
        return of(this.sanpham.find(x=> x.id === id));
      }  
}