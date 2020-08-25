import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailProductService {

  constructor(private httpClient : HttpClient) { }

  public getProductById(id){
    return this.httpClient.get(`http://localhost:9000/api/sale-post/${id}`)
  }

}
