import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ProductService} from '../api/product.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogProductComponent} from '../dialog-product/dialog-product.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  products:{};
  constructor(public productservice: ProductService, public dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(DialogProductComponent, {
      width: '958px'
    })
  }

  ngOnInit(): void {  //Frist Load 
      this.productservice.getProduct().subscribe((data: {})=>{
        console.log(data);
        this.products = data;
      })
  }

}
