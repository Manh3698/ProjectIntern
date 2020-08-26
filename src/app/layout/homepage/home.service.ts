import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) {
   }

   public getGroupProduct(){
     return this.httpClient.get('http://localhost:9000/api/group-product');
   }

   public getTypeProduct(id){
    return this.httpClient.get(`http://localhost:9000/api/type-product?groupProductId=${id}`);
   }
}
