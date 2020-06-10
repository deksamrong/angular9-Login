import { Component, OnInit } from '@angular/core';
import { ProductService } from '../api/product.service';

@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.scss']
})
export class DialogProductComponent implements OnInit {

    product = {
      name: '',
      price: ''
    }
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }
  save(){
    this.productService.save(this.product).subscribe(res=>{
      console.log(res);
    })
  }

}
