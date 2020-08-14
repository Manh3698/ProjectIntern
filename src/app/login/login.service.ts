import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  public login(data:any){
    return this.httpClient.post(`http://localhost:9000/api/auth/login`, data);
  }
}
