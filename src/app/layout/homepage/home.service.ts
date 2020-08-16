import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient) { }

  public gettypeProduct(){
    return this.http.get('http://localhost:9000/api/group-product');
  }
}
