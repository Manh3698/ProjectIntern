import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private tokenDecode: any;

  constructor(private http : HttpClient, private tokenStorageService : TokenStorageService) { 
    this.tokenDecode = jwt_decode(this.tokenStorageService.getToken());
  }
  getProfile() {
    return this.http.get<any>("http://localhost:9000/api/users/" + this.tokenDecode.id)
  }
}
