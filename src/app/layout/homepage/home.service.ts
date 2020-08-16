import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) {
   }

   public getTypeProduct(){
     return this.httpClient.get('http://localhost:9000/api/group-product');
   }
}
