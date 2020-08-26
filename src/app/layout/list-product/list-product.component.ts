import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { TransfereService } from 'src/app/_services/transfere.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  GroupProduct : any;
  TypeProduct : any;
  SalePost :any;
  public isCollapsed = false;
  constructor(private httpClient : HttpClient, private producService : ProductService, private router : Router, private transfereService : TransfereService ) { }

  ngOnInit(): void {
    this.producService.GetGroupProduct().subscribe(data =>{
        this.GroupProduct = data;
        console.log(this.GroupProduct);
    })
  };

  getTypeProduct(id: any){
    this.producService.GetTypeProduct(id).subscribe(data => {
      this.TypeProduct = data;
      console.log(this.TypeProduct)
    })
  };

  getSalePost(id:any){
    this.producService.GetSalePost(id).subscribe(data => {
      this.SalePost = data;
      console.log(this.SalePost);
      
    })
  };

  getDetail(id:any){
    console.log(id);
    this.transfereService.setData(id);
    this.router.navigateByUrl('/detail-product');
  }
}
