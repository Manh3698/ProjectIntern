import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  public GetGroupProduct(){
    return this.httpClient.get('http://localhost:9000/api/group-product');
  }
  public GetTypeProduct(GroupProductId : any){  
    return this.httpClient.get(`http://localhost:9000/api/type-product?groupProductId=${GroupProductId}`);
  }
  public GetSalePost(typeProductId : any){
    return this.httpClient.get(`http://localhost:9000/api/sale-post/?typeProductId=${typeProductId}`);
  }
  public GetImage(){
    return this.httpClient.get(`http://localhost:9000/api/files/`);
  }
}
