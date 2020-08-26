import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = { username:"", firstName: "", lastName: "", email: "", phone: ""}
  currentUser : any;
  constructor(private tokenService : TokenStorageService, private profileService : ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      res => {
        this.profile = res
        console.log(this.profile)
      },
      error => {
        console.log(error);      
      }
    );
  }

}
