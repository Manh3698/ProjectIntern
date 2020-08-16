import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  user: any;
  username: any;


  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
       
      const token = this.tokenStorageService.getToken();
      let decoded = jwt_decode(token);
      this.username = decoded['sub'];
    }
  };
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
