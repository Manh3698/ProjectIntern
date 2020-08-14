import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  public register(data:any){
    return this.httpClient.post(`http://localhost:9000/api/auth/register`, data)
  }
}
