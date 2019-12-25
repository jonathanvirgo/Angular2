import { Component, OnInit } from '@angular/core';
import { SanphamService } from '../../services/san-pham.service';

@Component({
  selector: 'app-products',
  templateUrl: 'app/components/products/products.component.html',
  styleUrls: ['app/components/products/products.component.css'],
  providers: [ SanphamService]
})
export class ProductsComponent implements OnInit {

  Products: any[];

  constructor(private sanphamservice:SanphamService) { }

  ngOnInit() {
    this.sanphamservice.getsanpham().subscribe(sp => {
      this.Products = sp;
    });
  }

}
