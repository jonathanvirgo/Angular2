import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanphamService} from '../../services/san-pham.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: 'app/components/product-detail/product-detail.component.html',
  styleUrls: ['app/components/product-detail/product-detail.component.css'],
  providers: [SanphamService]
})

export class ProductDetailComponent implements OnInit {
  product: any;
  id: string;
  private sub: any;
  activatedRoute: any;
  constructor(private actRoute: ActivatedRoute, private sanphamservice: SanphamService) {
    this.sub = this.actRoute.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.id = params['id'];
    });
  }
  ngOnInit(){
    // console.log("Abc",this.actRoute.snapshot.params.id)
    this.sanphamservice.getchitiet(this.id)
    .subscribe(hero => {
      this.product = hero;
    });
  }
}